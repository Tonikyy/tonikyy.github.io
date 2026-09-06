try {
  const savedTheme = localStorage.getItem('theme');
  const theme = savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'light';
  document.documentElement.dataset.theme = theme;
} catch {
  document.documentElement.dataset.theme = 'light';
}
