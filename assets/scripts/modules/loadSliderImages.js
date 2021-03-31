import data from "../data/imagesPaths.json";

const sliderImagesArray = document.querySelectorAll(
  ".sliderSection__imgWrapper > img"
);

const screenWidthLimit = window.matchMedia("screen and (min-width: 1024px)");

if (!screenWidthLimit.matches) {
  data.forEach((el, i) => {
    sliderImagesArray[i].src = el.mobileSrc;
    sliderImagesArray[i].alt = el.name;
  });
} else {
  data.forEach((el, i) => {
    sliderImagesArray[i].src = el.desktopSrc;
    sliderImagesArray[i].alt = el.name;
  });
}
