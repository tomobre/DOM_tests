export function RelojDigital(Btn, Btn2, IDreloj) {
  const d = document;
  const $reloj = d.querySelector(IDreloj);
  const $InReloj = d.querySelector(Btn);
  d.querySelector(Btn2).disabled = false;
  let timer;

  d.addEventListener("click", (e) => {
    if (e.target.matches(Btn)) {
      $InReloj.disabled = true;
      timer = setInterval(() => {
        $reloj.innerHTML = new Date().toLocaleTimeString();
      }, 1000);
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(Btn2) && $InReloj.disabled === true) {
      clearInterval(timer);
      $reloj.innerHTML = "";
      d.querySelector(Btn).disabled = false;
    }
  });
}

export function Alarma(InBtn, DetBtn, IDAlarm) {
  const d = document;
  let alarmTempo;
  const $alarm = d.createElement("audio");
  $alarm.src = IDAlarm;

  d.addEventListener("click", (e) => {
    if (e.target.matches(InBtn)) {
      alarmTempo = setTimeout(() => {
        $alarm.play();
      }, 2000);

      e.target.disabled = true;
    }
    if (e.target.matches(DetBtn)) {
      clearTimeout(alarmTempo);
      $alarm.pause();
      $alarm.currentTime = 0;
      d.querySelector(InBtn).disabled = false;
    }
  });
}
