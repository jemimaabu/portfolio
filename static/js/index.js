const themeDisplay = document.getElementById('theme-display');
const themeContainer = document.querySelector('.theme-container');
const themeSelectors = document.getElementsByClassName('theme-select');
const root = document.getElementsByTagName('html')[0];

const getTheme = () => {
  const theme = localStorage.getItem('theme') === null ? 'light' : localStorage.getItem('theme');
  setActiveSelector(theme);
  root.className = theme
}

const setActiveSelector = (className) => {
  var selectedTheme = document.getElementById(`${className}-select`);
  [...themeSelectors].forEach(item => {
    item.classList.remove('active')
  })
  selectedTheme.classList.add('active');
  hideThemeContainer();
}

const showThemeContainer = () => {
  themeContainer.classList.add('visible');
  [...themeSelectors].forEach(item => {
    item.tabIndex = 0
  })
}

const hideThemeContainer = () => {
  themeContainer.classList.remove('visible');
  [...themeSelectors].forEach(item => {
    item.tabIndex = -1
  })
}

const toggleThemeContainer = () => {
  if (themeContainer.classList.contains('visible')) {
    hideThemeContainer()
  } else {
    showThemeContainer()
  }
}

themeDisplay.addEventListener("click", function () {
  toggleThemeContainer()
})

const setThemeKey = (e, className) => {
  if (key === "Enter" || e.which === 13) {
    setTheme(className)
  }
  return;
}

const setTheme = (className) => {
  var root = document.getElementsByTagName('html')[0];
  root.className = '';
  root.classList.add(className);
  setActiveSelector(className);
  localStorage.setItem('theme', className)
}

window.addEventListener('load', () => {
  getTheme();
})