export function videoIntersection() {
  const d = document;
  const $video = d.querySelectorAll("video[data-smart-video]");

  const cb = (entries) => {
    entries.forEach((el) => {
      if (el.isIntersecting) {
        el.target.play();
      } else {
        el.target.pause();
      }
      window.addEventListener("visibilitychange", (e) => {
        if (d.visibilityState === "visible") {
          el.target.play();
        } else {
          el.target.pause();
        }
      });
    });
  };
  const observer = new IntersectionObserver(cb, { threshold: 0.5 });
  $video.forEach((el) => observer.observe(el));
}
