export function Keyboard(Bol, Ent) {
  const d = document;
  let x = 500;
  let y = 200;
  const ref = d.querySelector(Ent).style;

  d.addEventListener("keydown", (e) => {
    if (event.keyCode === 38 && y > 0) {
      y -= 20;
      d.querySelector(Bol).style.top = y + "px";
    }
    if (event.keyCode === 40 && y < 400) {
      y += 20;
      d.querySelector(Bol).style.top = y + "px";
    }
    if (event.keyCode === 39 && x < 1040) {
      x += 20;
      d.querySelector(Bol).style.left = x + "px";
    }
    if (event.keyCode === 37 && x > 0) {
      x -= 20;
      d.querySelector(Bol).style.left = x + "px";
    }
  });
}
