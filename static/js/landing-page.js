
const header = document.querySelector("header");
const fixedHeader = document.querySelector(".fixed-header");
const nav = document.querySelector("nav");
const scrollButton = document.querySelector(".scroll-button");
const mainSection = document.querySelector("main");
const topOfMain = mainSection.offsetTop;
const scrollElements = document.querySelectorAll('.scroll-in');

const elementInViewport = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;

  if (elementTop <= (window.innerHeight || document.documentElement.clientHeight) + offset) {
    return true;
  } else {
    return false
  }
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

const handleVisibleMain = () => {
  if (window.scrollY >= topOfMain) {
    mainSection.classList.add('visible');
  }
}

const displayScrollElement = (element) => {
  element.classList.add('scrolled')
}

scrollButton.addEventListener("click", function () {
  window.scroll({ top: topOfMain, behavior: "smooth" });
})

window.addEventListener("scroll", () => {
  handleHeaderScroll()
  handleVisibleNav()
  handleVisibleMain();

  scrollElements.forEach((el) => {
    if (elementInViewport(el, 300)) {
      displayScrollElement(el);
    }
  })
});