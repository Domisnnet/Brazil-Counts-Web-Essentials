const botaoTema = document.getElementById('toggle-theme');
if (localStorage.getItem('tema') === 'dark') { document.body.classList.add('dark-mode'); }
botaoTema.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const darkAtivo = document.body.classList.contains('dark-mode');
  localStorage.setItem('tema', darkAtivo ? 'dark' : 'light');
});
