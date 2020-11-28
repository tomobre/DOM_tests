export function responsiveMenu() {
  const d = document;
  const $sections = d.querySelectorAll("section[data-scroll-spy]");
  const cb = (entries) => {
    entries.forEach((element) => {
      const id = element.target.getAttribute("id");
      if (element.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };

  const observer = new IntersectionObserver(cb, { threshold: 0.5 });

  $sections.forEach((el) => observer.observe(el));
}
