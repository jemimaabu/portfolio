const getTheme = () => {
  var root = document.getElementsByTagName('html')[0];
  const theme = localStorage.getItem('theme') === null ? 'light' : localStorage.getItem('theme');
  root.className = theme
}

const setTheme = (className) => {
  var root = document.getElementsByTagName('html')[0];
  root.className = '';
  root.classList.add(className);
  localStorage.setItem('theme', className)
}

window.addEventListener('load', () => {
  getTheme();
})