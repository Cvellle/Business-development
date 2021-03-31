function startCounterOnScroll() {
  let scrolledToFacts = false;

  function startProgress() {
    const counter = [...document.querySelectorAll(".numbers__count--timer")];
    const startCounterAt = document.querySelector(".numbers");

    const position =
      startCounterAt.getBoundingClientRect().top -
      window.innerHeight +
      window.innerHeight / 10;
    const CounterCondition = position < 0;

    const numbers = [7890, 1509, 5972];
    const totalTime = 2000;
    const counterTime = numbers.map((num) => {
      return totalTime / num;
    });

    function startAll() {
      if (!scrolledToFacts) {
        numbers.forEach((num, index) => {
          let element = counter[index];
          for (let i = 0; i <= num; i++) {
            setTimeout(() => {
              element.innerHTML = i;
            }, i * (2000 / num));
          }
        });
      }
    }

    if (CounterCondition) {
      startAll();
      scrolledToFacts = true;
    }
  }
  window.addEventListener("scroll", startProgress);
}

window.addEventListener("load", startCounterOnScroll);
