
const header = document.querySelector(".fixed-header");
const nav = document.querySelector("nav");
const scrollButton = document.querySelector(".scroll-button");
const mainSection = document.querySelector("main");
const topOfMain = mainSection.offsetTop;

const handleHeaderScroll = () => {
  if (window.scrollY >= topOfMain - window.innerHeight) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

const handleVisibleNav = () => {
  if (window.scrollY >= topOfMain) {
    nav.classList.add('visible');
    nav.classList.remove('hidden');
  } else if (nav.classList.contains('visible') && window.scrollY <= topOfMain) {
    nav.classList.remove('visible');
    nav.classList.add('hidden');
  }
}

const handleVisibleMain = () => {
  if (window.scrollY >= topOfMain) {
    mainSection.classList.add('visible');
  }
}

scrollButton.addEventListener("click", function () {
  window.scroll({ top: topOfMain, behavior: "smooth" });
})

window.addEventListener("scroll", () => {
  handleHeaderScroll()
  handleVisibleNav()
  handleVisibleMain()
});