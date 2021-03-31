function slider() {
  const sliderImagesRow = document.querySelector(
    ".sliderSection__imagesSlidingRow"
  );
  const allSliderImages = document.querySelectorAll(
    ".sliderSection__imagesSlidingRow img"
  );
  const sliderCircleButtons = document.querySelectorAll(
    ".sliderSection__sliderBtn"
  );

  let secondsCount = 0;
  let positionCount = 1;

  const changePosition = function (oldCountPar) {
    sliderImagesRow.classList.replace(
      `sliderSection__imagesSlidingRow--position${oldCountPar}`,
      `sliderSection__imagesSlidingRow--position${positionCount}`
    );
  };

  const changeActiveButton = () => {
    sliderCircleButtons.forEach((el, i) =>
      el.classList.contains("sliderSection__sliderBtn--activeBtn")
        ? el.classList.remove("sliderSection__sliderBtn--activeBtn")
        : null
    );
    sliderCircleButtons[positionCount - 1].classList.add(
      "sliderSection__sliderBtn--activeBtn"
    );
  };

  const changeAriaHidden = (shownPar, hiddenPar) => {
    allSliderImages[shownPar - 1].setAttribute("aria-hidden", "true");
    allSliderImages[hiddenPar - 1].setAttribute("aria-hidden", "false");
  };

  const autoPlaySlider = function () {
    secondsCount += 1;
    secondsCount == 4 ? scrollSlider(true) : null;
  };

  const scrollSlider = function (autoPlay) {
    const moveLeftFunction = (leftToRight) => {
      secondsCount = 0;
      let oldCount = positionCount;
      const moveLeftLoop = () =>
        positionCount == 1 ? (positionCount = 4) : (positionCount -= 1);
      const moveRightLoop = () =>
        positionCount >= 4 ? (positionCount = 1) : (positionCount += 1);
      leftToRight ? moveLeftLoop() : moveRightLoop();
      changePosition(oldCount);
      changeActiveButton();
      changeAriaHidden(oldCount, positionCount);
    };
    autoPlay ? moveLeftFunction(false) : null;

    return function (event) {
      if (event.target.matches(".sliderSection__arrow")) {
        event.target.matches(".sliderSection__arrow--left")
          ? moveLeftFunction(true)
          : moveLeftFunction(false);
        changeActiveButton();
      }
      if (event.target.matches(".sliderSection__sliderBtn")) {
        secondsCount = 0;
        let oldCount = positionCount;
        positionCount = [...sliderCircleButtons].indexOf(event.target) + 1;
        changePosition(oldCount);
        changeActiveButton();
        changeAriaHidden(oldCount, positionCount);
      }
    };
  };

  setInterval(autoPlaySlider, 1000);

  const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        callback.apply(null, args);
      }, wait);
    };
  };

  window.addEventListener("click", debounce(scrollSlider(), 200));
}

window.addEventListener("load", slider);
