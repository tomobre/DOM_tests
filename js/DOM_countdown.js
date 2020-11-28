export function Countdown(IDcount, date, whatHappens) {
  const d = document;
  const $countdown = d.querySelector(IDcount);
  let timer;

  timer = setInterval(() => {
    const days = (new Date(date) - new Date()) / 86400000;
    const hours = ((days - Math.floor(days)) * 86400000) / 3600000;
    const minutes = ((hours - Math.floor(hours)) * 3600000) / 60000;
    const seconds = ((minutes - Math.floor(minutes)) * 60000) / 1000;
    $countdown.innerHTML = `${Math.floor(days)} dias ${Math.floor(
      hours
    )} horas ${Math.floor(minutes)} minutos ${Math.floor(seconds)} segundos`;
  }, 1000);

  if (new Date(date) - new Date() <= 0) {
    clearInterval(timer);
    $countdown.innerHTML = whatHappens;
  }
}
