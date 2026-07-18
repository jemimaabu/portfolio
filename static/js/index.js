const mainNav = document.querySelector('nav.site-nav');

if (mainNav) mainNav.classList.add('js-nav');

const updateMetaThemeColor = () => {
  const shade = getComputedStyle(document.documentElement).getPropertyValue('--shade-100');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', shade);
}

const getTheme = () => {
  const theme = localStorage.getItem('theme');
  if (!theme) return;
  const radio = document.querySelector(`#theme-panel [value="${theme}"]`);
  if (radio) radio.checked = true;
  updateMetaThemeColor();
}

document.querySelectorAll('#theme-panel [name="theme"]').forEach(radio => {
  radio.addEventListener('change', () => {
    localStorage.setItem('theme', radio.value);
    updateMetaThemeColor();
    document.getElementById('theme-panel')?.hidePopover();
  });
});

getTheme();

let previousScrollPosition = 0;

const isScrollingDown = () => {
  let scrolledPosition = window.scrollY;
  let isScrollDown;

  if (scrolledPosition > previousScrollPosition) {
    isScrollDown = true;
  } else {
    isScrollDown = false;
  }
  previousScrollPosition = scrolledPosition;
  return isScrollDown;
}

const handleNavScroll = () => {
  if (!mainNav) return;
  if (mainNav.classList.contains('visible')) {
    if (isScrollingDown()) {
      mainNav.classList.add('scroll-down');
      mainNav.classList.remove('scroll-up');
    } else {
      mainNav.classList.add('scroll-up');
      mainNav.classList.remove('scroll-down');
    }
  } else {
    mainNav.classList.remove('scroll-up');
    mainNav.classList.remove('scroll-down');
  }
}

window.addEventListener('scroll', () => {
  handleNavScroll();
});
