const mapaRegioes = {
  'AC': 'Norte', 'AL': 'Nordeste', 'AP': 'Norte', 'AM': 'Norte', 'BA': 'Nordeste',
  'CE': 'Nordeste', 'DF': 'Centro-Oeste', 'ES': 'Sudeste', 'GO': 'Centro-Oeste',
  'MA': 'Nordeste', 'MT': 'Centro-Oeste', 'MS': 'Centro-Oeste', 'MG': 'Sudeste',
  'PA': 'Norte', 'PB': 'Nordeste', 'PR': 'Sul', 'PE': 'Nordeste', 'PI': 'Nordeste',
  'RJ': 'Sudeste', 'RN': 'Nordeste', 'RS': 'Sul', 'RO': 'Norte', 'RR': 'Norte',
  'SC': 'Sul', 'SP': 'Sudeste', 'SE': 'Nordeste', 'TO': 'Norte'
};

const coresPorRegiao = {
  'Norte': '#4bc0c0',
  'Nordeste': '#ff9f40',
  'Centro-Oeste': '#f2c94c',
  'Sudeste': '#36a2eb',
  'Sul': '#9966ff'
};

let grafico = null;

function criarGrafico(estados) {  // KPIs
  const total = estados.reduce((s, e) => s + Number(e.populacao), 0);
  const maior = estados.reduce((a, b) => Number(b.populacao) > Number(a.populacao) ? b : a, estados[0]);
  document.getElementById('kpi-total').textContent = total.toFixed(2);
  document.getElementById('kpi-estados').textContent = estados.length;
  document.getElementById('kpi-maior').textContent = maior ? maior.sigla : '-';
  const dark = document.body.classList.contains('dark-mode');
  const corTexto = dark ? '#e2e8f0' : '#0f172a';
  const corGrade = dark ? '#334155' : '#e2e8f0';
  const labels = estados.map(e => e.sigla);
  const dados = estados.map(e => Number(e.populacao));
  const cores = estados.map(e => coresPorRegiao[mapaRegioes[e.sigla]] || '#cccccc98');
  if (grafico) grafico.destroy();
  grafico = new Chart(document.getElementById('popChart'), {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'População - Milhões',
        data: dados,
        backgroundColor: cores,
        borderRadius: 8,
        maxBarThickness: 48
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: (itens) => {
              const e = estados[itens[0].dataIndex];
              return `${e.nome} (${e.sigla})`;
            },
            label: (item) => ` População: ${item.raw} Milhões`
          }
        }
      },
      scales: {
        y: { beginAtZero: true, ticks: { color: corTexto }, grid: { color: corGrade } },
        x: { ticks: { color: corTexto }, grid: { display: false } }
      }
    }
  });
}

function carregarEstados() {
  const regiao = document.getElementById('regiao').value;
  const url = regiao
    ? `/api/estados?regiao=${encodeURIComponent(regiao)}`
    : '/api/estados';
  fetch(url)
    .then(res => res.json())
    .then(data => criarGrafico(data.estados || data));
}

document.getElementById('regiao').addEventListener('change', carregarEstados);

const botaoTema = document.getElementById('toggle-theme');
if (localStorage.getItem('tema') === 'dark') { document.body.classList.add('dark-mode'); }
botaoTema.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const darkAtivo = document.body.classList.contains('dark-mode');
  localStorage.setItem('tema', darkAtivo ? 'dark' : 'light');
  carregarEstados();
});

carregarEstados();
