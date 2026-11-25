const express = require('express');
const cors = require('cors');
const path = require('node:path');
require('dotenv').config();
const pool = require('./database');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/health', (req, res) => { res.json(
  { status: 'ok', projeto: 'brazil-counts-web-essentials' });
});
app.get('/api/estados', async (req, res) => {
  try { const { regiao, busca, ordenar } = req.query;
    let sql = 'SELECT * FROM estados WHERE 1 = 1';
    const params = [];
    if (regiao) { sql += ' AND regiao = ?'; params.push(regiao); }
    if (busca) {
      sql += ' AND (nome LIKE ? OR sigla = ? OR capital LIKE ?)';
      const termo = `%${busca}%`;
      params.push(termo, busca.toUpperCase(), termo);
    }
    const ordenacoesPermitidas = {  // Ordenação - só aceita valores permitidos, evita SQL Injection
      populacao_desc: 'populacao DESC',
      populacao_asc: 'populacao ASC',
      nome_asc: 'nome ASC',
      pib_desc: 'pib_bilhoes DESC',
      idh_desc: 'idh DESC',
      densidade_desc: 'densidade_km2 DESC'
    };
    const orderBy = ordenacoesPermitidas[ordenar] || 'populacao DESC';
    sql += ` ORDER BY ${orderBy}`;
    const [estados] = await pool.query(sql, params);
    const [totalRows] = await pool.query( 'SELECT SUM(populacao) AS total_populacao FROM estados' );
    res.json({
      meta: {
        fonte: 'IBGE - Estimativas da População 2024',
        total_populacao: Number(totalRows[0].total_populacao)
      },
      total: estados.length,
      estados
    });
  } catch (err) {
    console.error('Erro em /api/estados:', err.message);
    res.status(500).json({ erro: 'Falha ao buscar estados' });
  }
});

// Detalhe de um estado pela sigla - ex: /api/estados/SP
app.get('/api/estados/:sigla', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM estados WHERE sigla = ?',
      [req.params.sigla.toUpperCase()]
    );
    if (rows.length === 0) { return res.status(404).json({ erro: 'Estado não encontrado' }); }
    res.json({ estado: rows[0] });
  } catch (err) {
    console.error('Erro em /api/estados/:sigla:', err.message);
    res.status(500).json({ erro: 'Falha ao buscar estado' });
  }
});

// Totais por região
app.get('/api/regioes', async (req, res) => {
  try {
    const [regioes] = await pool.query(
      `
        SELECT regiao,
        COUNT(*) AS estados,
        SUM(populacao) AS total_populacao,
        SUM(pib_bilhoes) AS pib_bilhoes
        FROM estados
        GROUP BY regiao
        ORDER BY total_populacao DESC
      `
    );
    res.json({ regioes });
  } catch (err) {
    console.error('Erro em /api/regioes:', err.message);
    res.status(500).json({ erro: 'Falha ao buscar regiões' });
  }
});

app.listen(PORT, () => { console.log(`Brazil Counts rodando em http://localhost:${PORT}`); });
