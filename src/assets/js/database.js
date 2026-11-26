const mysql = require('mysql2/promise');
require('dotenv').config();

// Cria o pool - reutiliza conexões, não abre uma nova a cada request
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'brazil-counts',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function testConnection() {
  try { const [rows] = await pool.query('SELECT 1 AS ok');
    if (rows[0].ok === 1) { console.log('MySQL conectado: brazil-counts'); }
  } catch (err) {
    console.error('Erro ao conectar no MySQL:', err.message);
    console.error('Verifique o .env e se o MySQL está rodando');
  }
}

testConnection();
module.exports = pool;
