export function ScrollUp(Btn) {
  const d = document;
  let scroll = document.documentElement;

  d.addEventListener("click", (e) => {
    if (e.target.matches(Btn) || e.target.matches(`${Btn} *`)) {
      scroll.scrollTop = 0;
    }
  });

  window.addEventListener("scroll", (e) => {
    if (scroll.scrollTop > 500) {
      d.querySelector(Btn).classList.remove("is-hidden");
    } else {
      d.querySelector(Btn).classList.add("is-hidden");
    }
  });
}
