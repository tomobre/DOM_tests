export function Sort(btn) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let random = Math.round(Math.random() * 10);
      let $winner = d.getElementById(random).textContent;
      alert(`El ganador es ${$winner}`);
    }
  });
}

/*
EJERCICIO DE JON APLICABLE EN GRAL
const getWinnerComment = (selector) => {
  const $players = document.querySelectorAll(selector),
    random = Math.floor(Math.random() * $players.length),
    winner = $players[random];
  return `el ganador es: ${winner.textContent}`;
};

*/
