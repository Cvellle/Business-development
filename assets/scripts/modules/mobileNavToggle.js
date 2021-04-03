function mobileNavToggle() {
  const menuIcon = document.querySelector(".header__hamburgerBtn");
  const navigation = document.querySelector(".header__navButtons");
  const navButtons = document.querySelectorAll(".header__navBtn");
  const screenWidthLimit = window.matchMedia("screen and (min-width: 1025px)");

  if (!screenWidthLimit.matches) {
    const toggleNav = () => {
      navigation.classList.toggle("header__navButtons--mobileVisible");
      for (let i = 0; i < menuIcon.children.length; i++) {
        menuIcon.children[i].classList.toggle(
          `header__hamburgerLine--xModifier${i + 1}`
        );
      }
    };
    navButtons.forEach((el) => el.addEventListener("click", toggleNav));
    menuIcon.addEventListener("click", toggleNav);
  }
}

window.addEventListener("load", mobileNavToggle);
