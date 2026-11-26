![Repo Size](https://img.shields.io/github/repo-size/Domisnnet/Brazil-Counts-Web-Essentials?style=flat&label=REPO%20SIZE&labelColor=2d333b&color=0969da)
![Stars](https://img.shields.io/github/stars/Domisnnet/Brazil-Counts-Web-Essentials?style=flat&label=STARS&labelColor=2d333b&color=0969da)
![Last Commit](https://img.shields.io/github/last-commit/Domisnnet/Brazil-Counts-Web-Essentials?style=flat&label=LAST%20COMMIT&labelColor=2d333b&color=2ea44f)
![Version](https://img.shields.io/badge/Version-Web%20Essentials-0969da?style=flat&label=VERSION&labelColor=2d333b&color=0969da)

<h2 id="sobre-o-projeto">1. 📊 Brazil Counts: Inteligência de Dados:</h2>

![Status do Deploy](https://img.shields.io/badge/Status-Online-brightgreen?style=flat&logo=firebase&logoColor=white)
![Tech](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JavaScript-blue?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Data](https://img.shields.io/badge/Data-JSON-yellow?style=flat-square)
![Imagem Dashboard](src/assets/images/brazil.png)

> Bem-vindo ao `Brazil Counts!` Uma solução de Business Intelligence `Open Source` desenvolvida para visualizar a população dos estados brasileiros. O projeto visa resolver a dor de comparar população por estado e por região sem precisar abrir planilha, utilizando dados do `IBGE - Estimativas 2024.`

---

## 📚 Tabela de Conteúdo

| 📊 O Projeto | 🛠 Técnico | 🤝 Comunidade |
| :---: | :---: | :---: |
| [![1. Sobre](https://img.shields.io/badge/1%20-%20Sobre-4CAF50)](#sobre-o-projeto) | [![5. Destaques](https://img.shields.io/badge/5%20-%20Destaques-607D8B)](#destaques-tecnicos) | [![9. Código](https://img.shields.io/badge/9%20-%20Código-795548)](#codigo-fonte) |
| [![2. Techs](https://img.shields.io/badge/2%20-%20Techs-2196F3)](#tecnologias-utilizadas) | [![6. Estrutura](https://img.shields.io/badge/6%20-%20Estrutura-009688)](#estrutura-do-projeto) | [![10. Créditos](https://img.shields.io/badge/10%20-%20Créditos-607D8B)](#créditos) |
| [![3. Acessar](https://img.shields.io/badge/3%20-%20Rodar-FF9800)](como-acessar) | [![7. Contribuir](https://img.shields.io/badge/7%20-%20Contribuir-3F51B5)](#como-contribuir) | [![11. Licença](https://img.shields.io/badge/11%20-%20Licença-E91E63)](#licenca) |
| [![4. Insights](https://img.shields.io/badge/4%20-%20Insights-9C27B0)](#insights-principais) | [![8. FAQ](https://img.shields.io/badge/8%20-%20FAQ-FFC107)](#faq) | [![12. Perfil](https://img.shields.io/badge/12%20-%20Perfil-212121)](#perfil-do-github) |

---

<h2 id="sobre-o-projeto">1. Brazil Counts: Inteligência de Dados 📊</h2>

No dia a dia, comparar população por estado e por região em planilha gera duas dores principais:
1. **Sem visão rápida:** Difícil ver de uma vez quem é o maior, quem é o menor e qual região concentra mais gente.
2. **Sem filtro:** Difícil isolar uma região ou buscar um estado sem refazer a tabela.

Este Dashboard atua como uma camada de inteligência sobre os dados do IBGE. Através do arquivo `estados.json`, o script em JavaScript calcula o total, o maior, o menor, a região mais populosa e cria um **gráfico de barras por estado**, um **gráfico de pizza por região** e uma **tabela completa** com o % do Brasil.

---

<h2 id="tecnologias-utilizadas">2. ⚙ Tecnologias Utilizadas</h2>

| Camada | Tecnologias | Descrição |
| :--- | :--- | :--- |
| **Linguagem** | ![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white) | Estrutura do dashboard, sem JS dentro. |
| **Estilo** | ![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white) | Glasmorphism, tema claro / escuro e responsivo. |
| **Lógica** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Filtros, KPIs, gráficos e tabela. |
| **Dados** | ![JSON](https://img.shields.io/badge/JSON-000000?style=flat-square&logo=json&logoColor=white) | Lista dos 27 estados com nome, sigla, capital, região e população. |

---

<h2 id="como-acessar">3. 🚀 Como Acessar</h2>

Clique no botão abaixo para testar a interface do Finans em tempo real:

<div align="left">
  <a href="https://brazil-counts.web.app/" target="_blank">
    <img alt="Botão Acessar" src="src/assets/images/botão.webp" height="70" />
  </a>
</div>

---

<h2 id="insights-principais">4. 🧩 Insights Principais</h2>

O projeto foca em simplicidade e feedback instantâneo para o usuário:

| Insight | Impacto |
| :--- | :--- |
| 📊 **População Total — 211,76 mi** | Visão imediata do tamanho do Brasil em milhões de habitantes. |
| 🏆 **Maior Estado — São Paulo (SP) — 46,65 mi** | Identificação do estado com maior população. |
| 📉 **Menor Estado — Roraima (RR) — 0,65 mi** | Identificação do estado com menor população. |
| 🗺 **Região Mais Populosa — Sudeste — 87,97 mi** | Visibilidade da região que concentra mais gente. |
| 🍕 **Pizza por Região** | Sudeste 41,5%, Nordeste 27,2%, Sul 14,4%, Norte 8,8%, Centro-Oeste 8,0%. |
| 📱 **Design Adaptável** | Interface limpa que permite a verificação em diferentes telas. |

---

<h2 id="destaques-tecnicos">5. 💻 Destaques Técnicos</h2>

O projeto foi construído com foco em **Reprodutibilidade** e **Clareza Analítica**:

<h3>🧹 Padrão Web Essentials:</h3>

HTML só com estrutura, CSS só com estilo e JS só com lógica. Identificadores em inglês, comentários e textos em pt-BR, indentação de 2 espaços. Sem framework, sem build, sem `npm`.

<h3>🔒 Sem Fallback — Nota de Confiabilidade:</h3>

Este projeto não usa dados embutidos como fallback. Se o `estados.json` não for encontrado, o `app.js` mostra o erro no console e na tela, sem fingir dados. Os caminhos tentados, nesta ordem, são:

```text
src/assets/data/estados.json
data/estados.json
/src/assets/data/estados.json
estados.json
```

<h3>🎨 Glasmorphism + Tema Claro / Escuro:</h3>

Cards com `backdrop-filter: blur(16px)`, borda de `2px` e `border-radius: 20px`. Header e footer em barra de ponta a ponta, sem pílula, com `--header` mais sólido que os cards para não sumir no fundo. Tema salvo em `localStorage` com a chave `tema`.

---

<h2 id="estrutura-do-projeto">6. 📂 Estrutura do Projeto</h2>

```text
Brazil-Counts-Web-Essentials
├── src/
│   └── assets/
│       ├── index.html          📌 Estrutura do dashboard.
│       ├── 404.html            📌 Página de erro com mesmo header e toggle.
│       ├── css/
│       │   └── style.css       📌 Estilo, Glasmorphism e responsivo.
│       ├── js/
│       │   └── app.js          📌 Lógica, filtros, KPIs, gráficos e tabela.
│       ├── data/
│       │   └── estados.json    📌 27 estados com nome, sigla, capital, região e população.
│       └── images/
│           └── logo.png        📌 Logo do Brazil Counts.
└── README.md                   📌 Documentação Técnica.
```

---

<h2 id="como-contribuir">7. 🤝 Como Contribuir</h2>

Deseja melhorar o design ou adicionar novas métricas? Siga o fluxo oficial:

| Fase | Ação | Link / Comando |
| :---: | :--- | :---: |
| **01** | **Fork** | [![Fork](https://img.shields.io/badge/-Fazer%20Fork-blue?style=flat-square&logo=github)](https://github.com/Domisnnet/Brazil-Counts-Web-Essentials/fork) |
| **02** | **Branch** | `git checkout -b feature/NovoGrafico` |
| **03** | **Commit** | `git commit -m 'feat: add gráfico de pizza'` |
| **04** | **Push** | `git push origin feature/NovoGrafico` |
| **05** | **PR** | [![Abrir PR](https://img.shields.io/badge/-Abrir%20PR-green?style=flat-square&logo=git)](https://github.com/Domisnnet/Brazil-Counts-Web-Essentials/compare) |

<h3>🐛 Encontrou um problema?</h3>

Se algo não estiver funcionando como esperado, não hesite em abrir um chamado:

[![Issues Abertas](https://img.shields.io/github/issues/Domisnnet/Brazil-Counts-Web-Essentials?style=flat-square&color=red&logo=github)](https://github.com/Domisnnet/Brazil-Counts-Web-Essentials/issues)
[![Report Bug](https://img.shields.io/badge/Reportar-Erro-critical?style=flat-square&logo=github)](https://github.com/Domisnnet/Brazil-Counts-Web-Essentials/issues/new)

---

<h2 id="faq">8. 🧠 Perguntas Frequentes</h2>

<details>
<summary><strong>Os dados são reais ou fictícios ❓</strong></summary>
<p>
  📊 <strong>Resposta:</strong> Os dados utilizados são os do <code>IBGE - Estimativas 2024</code>, em <code>estados.json</code>, para fins de demonstração e estudo de técnicas de BI.
</p>
</details>

<details>
<summary><strong>Por que os KPIs ficam em -- ❓</strong></summary>
<p>
  ✅ <strong>Resposta:</strong> Porque o <code>estados.json</code> não foi encontrado em nenhum dos caminhos tentados. Abra o <code>F12</code> e veja o erro no console. Não abrir com <code>file://</code>, usar um servidor estático como <code>npx serve .</code>
</p>
</details>

<details>
<summary><strong>Como adicionar um novo gráfico ❓</strong></summary>
<p>
  🎨 <strong>Resposta:</strong> Crie um novo bloco no arquivo <code>src/assets/js/app.js</code>, crie uma função <code>renderizarNovoGrafico(lista)</code> e chame ela dentro de <code>atualizar()</code>. Adicione o estilo no <code>style.css</code> na seção correspondente.
</p>
</details>

---

<h2 id="codigo-fonte">9. 💻 Código Fonte</h2>

Deseja analisar a lógica de processamento? Explore o Repositório Oficial:

[![Repositório](https://img.shields.io/badge/Repositório-Domisnnet%2FBrazil--Counts--Web--Essentials-3776AB?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Domisnnet/Brazil-Counts-Web-Essentials)

---

<h2 id="créditos">10. 📝 Créditos & Reconhecimentos</h2>

O **Brazil Counts** é resultado de estudo contínuo em Web Essentials e BI:

| Atribuição | Responsável / Recurso | Descrição |
| :--- | :--- | :--- |
| **Análise de Dados** | **DomisDev** | Exploração, limpeza e visualização dos datasets. |
| **Empresa:** | | **Brazil Counts** | Contexto de negócio e origem dos dados. |
| **Engine Gráfica** | **CSS + conic-gradient** | Base para renderização da pizza por região. |
| **Manipulação** | **JavaScript puro** | Filtros, KPIs, barras, pizza e tabela. |
| **Apoio Técnico** | **Google Gemini** | Padronização e refinamento documental. |

---

<h2 id="licenca">11. 📄 Licença</h2>

Este projeto está licenciado sob a &nbsp;[![Licença MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/Domisnnet/Brazil-Counts-Web-Essentials/blob/main/LICENSE)

---

<h2 id="perfil-do-github">12. 👨💻 Perfil do GitHub</h2>

<a href="https://github.com/Domisnnet">
  <img src="src/assets/images/DomisDev.png" width="90" alt="Acessar perfil GitHub">
</a>

&nbsp;
<p align="center">
  <a href="#sobre-o-projeto">
    <img src=
      "https://img.shields.io/badge/⬆%20VOLTAR%20AO%20TOPO-26FF00?style=flat&labelColor=111827&color=0A0F1C" alt="Voltar ao topo" style="height: 30px;"
    >
  </a>
</p>
