const d = document,
  n = navigator;
export function webcam(id) {
  let $p = d.querySelector(id);

  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        $p.srcObject = stream;
        $p.play();
      })
      .catch((err) => {
        console.log("Hubo un error");
        $p.insertAdjacentHTML(
          "beforebegin",
          ` <p><mark>ERROR: ${err}</mark></p>`
        );
      });
  }
}
