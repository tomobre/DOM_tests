export function OnOff() {
  window.addEventListener("online", (event) => {
    document.querySelector("#ConectON").style.display = "flex";
    setTimeout(function () {
      document.querySelector("#ConectON").style.display = "none";
    }, 4000);
  });

  window.addEventListener("offline", (event) => {
    document.querySelector("#ConectOFF").style.display = "flex";
    setTimeout(function () {
      document.querySelector("#ConectOFF").style.display = "none";
    }, 4000);
  });
}
