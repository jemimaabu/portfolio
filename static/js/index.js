const themeDisplay = document.getElementById('theme-display');
const themeContainer = document.querySelector('.theme-container');
const themeSelectors = document.getElementsByClassName('theme-select');
const root = document.getElementsByTagName('html')[0];
const menu = document.querySelector('.nav-links');
const menuButton = document.getElementById('menu-display');

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

themeDisplay.addEventListener("click", function () {
  hideMenu()
  if (themeContainer.classList.contains('visible')) {
    hideThemeContainer()
  } else {
    showThemeContainer()
  }
})

const setTheme = (className) => {
  var root = document.getElementsByTagName('html')[0];
  root.className = '';
  root.classList.add(className);
  setActiveSelector(className);
  localStorage.setItem('theme', className)
}

const showMenu = () => {
  menu.classList.add('visible');
  menuButton.classList.add('active');
}

const hideMenu = () => {
  menu.classList.remove('visible');
  menuButton.classList.remove('active');
}

menuButton.addEventListener("click", function () {
  hideThemeContainer();
  if (menu.classList.contains('visible')) {
    hideMenu();
  } else {
    showMenu()
  }
})

window.addEventListener('load', () => {
  getTheme();
})