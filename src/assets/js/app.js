const CORES_REGIAO = {
  "Norte": "#22c55e",
  "Nordeste": "#f97316",
  "Sul": "#3b82f6",
  "Sudeste": "#8b5cf6",
  "Centro-Oeste": "#eab308"
};

let todosEstados = [];
let totalBrasil = 0;
const el = (id) => document.getElementById(id);

function formatar(valor) { return valor.toFixed(2).replace(".", ","); }

function obterFiltrados() {
  const busca = el("busca").value.toLowerCase().trim();
  const regiao = el("filtro-regiao").value;
  const ordem = el("ordenacao").value;
  let lista = todosEstados.filter((e) => {
    const bateBusca =
      !busca || e.nome.toLowerCase().includes(busca) || e.sigla.toLowerCase().includes(busca);
    const bateRegiao = regiao === "Todas" || e.regiao === regiao;
    return bateBusca && bateRegiao;
  });
  if (ordem === "maior") lista.sort((a, b) => b.populacao - a.populacao);
  if (ordem === "menor") lista.sort((a, b) => a.populacao - b.populacao);
  if (ordem === "az") lista.sort((a, b) => a.nome.localeCompare(b.nome));
  return lista;
}

function renderizarKPIs(lista) {
  const total = lista.reduce((s, e) => s + e.populacao, 0);
  const maior = lista.length ? [...lista].sort((a, b) => b.populacao - a.populacao)[0] : null;
  const menor = lista.length ? [...lista].sort((a, b) => a.populacao - b.populacao)[0] : null;
  el("kpi-total").textContent = formatar(total) + " mi";
  el("kpi-maior").textContent = maior ? maior.nome + " (" + maior.sigla + ")" : "--";
  el("kpi-maior-valor").textContent = maior ? formatar(maior.populacao) + " milhoes" : "--";
  el("kpi-menor").textContent = menor ? menor.nome + " (" + menor.sigla + ")" : "--";
  el("kpi-menor-valor").textContent = menor ? formatar(menor.populacao) + " milhoes" : "--";
  const porRegiao = {};
  lista.forEach((e) => { porRegiao[e.regiao] = (porRegiao[e.regiao] || 0) + e.populacao; });
  const top = Object.entries(porRegiao).sort((a, b) => b[1] - a[1])[0];
  el("kpi-regiao").textContent = top ? top[0] : "--";
  el("kpi-regiao-valor").textContent = top ? formatar(top[1]) + " milhoes" : "--";
}

function renderizarGrafico(lista) {
  const max = lista.length ? Math.max(...lista.map((e) => e.populacao)) : 1;
  el("grafico-barras").innerHTML = lista.map((e) =>
  ` <div class="barra-linha">
      <span>${e.sigla} - ${e.nome}</span>
      <div class="barra-trilha">
        <div class=
          "barra-preenchimento"
          style="width:${(e.populacao / max) * 100}%;background:${CORES_REGIAO[e.regiao]}">
        </div>
      </div>
      <strong>${formatar(e.populacao)}</strong>
    </div>
  `).join("") || "<p>Nenhum estado encontrado.</p>";
}

function renderizarPizza(lista) {
  const porRegiao = {};
  lista.forEach((e) => { porRegiao[e.regiao] = (porRegiao[e.regiao] || 0) + e.populacao; });
  const total = lista.reduce((s, e) => s + e.populacao, 0) || 1;
  const entradas = Object.entries(porRegiao).sort((a, b) => b[1] - a[1]);
  let acumulado = 0;
  const fatias = entradas.map(([regiao, valor]) => {
    const inicio = (acumulado / total) * 360;
    acumulado += valor;
    const fim = (acumulado / total) * 360;
    return `${CORES_REGIAO[regiao]} ${inicio.toFixed(1)}deg ${fim.toFixed(1)}deg`;
  }).join(", ");
  const pizza = el("pizza");
  if (pizza) pizza.style.background = `conic-gradient(${fatias})`;
  const centro = el("pizza-centro");
  if (centro) centro.innerHTML = `<strong>${formatar(total)} mi</strong><span>Total</span>`;
  el("regioes").innerHTML = entradas.map(([regiao, valor]) =>
  `  <div class="regiao-linha">
      <span><span class="badge" style="background:${CORES_REGIAO[regiao]}">${regiao}</span></span>
      <strong>${formatar(valor)} mi - ${((valor / total) * 100).toFixed(1).replace(".", ",")}%</strong>
    </div>
  `).join("");
}

function renderizarTabela(lista) {
  el("tabela-estados").innerHTML = lista.map((e, i) =>
  `  <tr>
      <td>${i + 1}</td>
      <td>${e.nome}</td>
      <td><strong>${e.sigla}</strong></td>
      <td>${e.capital}</td>
      <td><span class="badge" style="background:${CORES_REGIAO[e.regiao]}">${e.regiao}</span></td>
      <td>${formatar(e.populacao)}</td>
      <td>${((e.populacao / totalBrasil) * 100).toFixed(2).replace(".", ",")}%</td>
    </tr>
  `).join("");
}

function atualizar() {
  const lista = obterFiltrados();
  renderizarKPIs(lista);
  renderizarGrafico(lista);
  renderizarPizza(lista);
  renderizarTabela(lista);
}

async function carregarDados() {
  const caminhos = ["src/assets/data/estados.json", "data/estados.json", "/src/assets/data/estados.json", "estados.json"];
  for (const caminho of caminhos) {
    try { const res = await fetch(caminho);
      if (!res.ok) continue;
      const dados = await res.json();
      const lista = dados.estados || dados;
      if (Array.isArray(lista) && lista.length === 27) {
        console.log("Brazil Counts: dados carregados de", caminho); return lista;
      }
    } catch (e) {}
  }
  throw new Error("estados.json nao encontrado. Verifique se esta em src/assets/data/estados.json");
}

async function iniciar() {
  if (localStorage.getItem("tema") === "dark") document.body.classList.add("dark-mode");
  el("toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("tema", document.body.classList.contains("dark-mode") ? "dark" : "light");
  });
  try {
    todosEstados = await carregarDados();
  } catch (erro) { console.error(erro);
    el("grafico-barras").innerHTML =
    `<p style="color:#ef4444;font-weight:600">Erro: ${erro.message}</p>`; return;
  }
  totalBrasil = todosEstados.reduce((s, e) => s + e.populacao, 0);
  el("busca").addEventListener("input", atualizar);
  el("filtro-regiao").addEventListener("change", atualizar);
  el("ordenacao").addEventListener("change", atualizar);
  el("limpar-filtros").addEventListener("click", () => {
    el("busca").value = "";
    el("filtro-regiao").value = "Todas";
    el("ordenacao").value = "maior";
    atualizar();
  });
  atualizar();
}

iniciar();
