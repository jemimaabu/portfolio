
const header = document.querySelector("header");
const fixedHeader = document.querySelector(".fixed-header");
const nav = document.querySelector("nav");
const scrollButton = document.querySelector(".scroll-button");
const topOfNav = nav.getBoundingClientRect().top;
const scrollElements = document.querySelectorAll('.scroll-in');

const elementInViewport = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (elementTop <= ((window.innerHeight || document.documentElement.clientHeight) / dividend))
}

const elementOutofView = (el) => {

  const elementTop = el.getBoundingClientRect().top;

  return (elementTop > (window.innerHeight || document.documentElement.clientHeight))
}

const handleHeaderScroll = () => {
  const headerBottomOffset = header.getBoundingClientRect().bottom;

  if (headerBottomOffset <= fixedHeader.clientHeight) {
    fixedHeader.classList.add('scrolled');
  } else {
    fixedHeader.classList.remove('scrolled');
  }
}

const handleVisibleNav = () => {
  if (elementInViewport(nav)) {
    nav.classList.add('visible');
    nav.classList.remove('hidden');
  } else if (nav.classList.contains('visible') && !elementInViewport(nav)) {
    nav.classList.remove('visible');
    nav.classList.add('hidden');
  }
}

const displayScrollElement = (element) => {
  element.classList.add('scrolled')
}

const hideScrollElement = (element) => {
  element.classList.remove('scrolled')
}

scrollButton.addEventListener("click", function () {
  window.scroll({ top: topOfNav, behavior: "smooth" });
})

window.addEventListener("scroll", () => {
  handleHeaderScroll();
  handleVisibleNav();

  scrollElements.forEach((el) => {
    if (elementInViewport(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
});