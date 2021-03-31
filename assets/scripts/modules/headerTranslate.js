function headerTranslate() {
  const header = document.querySelector(".header");
  const topNavigation = document.querySelector(".topNavigation");
  const screenWidthLimit = window.matchMedia("screen and (min-width: 1024px)");
  const headerLogo = document.querySelector(".header__logoWrapper");

  let position = null;

  if (!screenWidthLimit.matches) {
    position = header.offsetHeight;
  } else {
    position = topNavigation.offsetHeight * 2;
  }

  const condition = window.scrollY > position;

  if (condition) {
    header.classList.add("header--translated");
    headerLogo.classList.add("header__logoWrapper--smaller");
  } else {
    header.classList.remove("header--translated");
    headerLogo.classList.remove("header__logoWrapper--smaller");
  }
  window.addEventListener("scroll", headerTranslate);
}

window.addEventListener("load", headerTranslate);
