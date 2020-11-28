export function Dark(Btn, dataDark) {
  const d = document;
  const $selectors = d.querySelectorAll("[data-dark]");
  let moon = "🌙";
  let sun = "☀️";
  let ls = localStorage;

  const lightMode = () => {
    d.querySelector(Btn).textContent = moon;
    $selectors.forEach((el) => el.classList.remove(dataDark));
    ls.setItem("theme", "light");
  };
  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(dataDark));
    d.querySelector(Btn).textContent = sun;
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(Btn)) {
      if (d.querySelector(Btn).textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) {
      ls.setItem("theme", "light");
    }

    if (ls.getItem("theme") === "light") {
      lightMode();
    }
    if (ls.getItem("theme") === "dark") {
      darkMode();
    }
  });
}
