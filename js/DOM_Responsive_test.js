export function ResponsiveTest(url, urlOpen, urlClose, width, height) {
  let ventana;

  let $url = document.querySelector(url);
  let $page = document.querySelector(urlOpen);
  let $width = document.querySelector(width);
  let $height = document.querySelector(height);

  $page.addEventListener("click", (e) => {
    event.preventDefault();
    ventana = window.open(
      $url.value,
      "",
      `innerWidth=${$width.value},innerHeight=${$height.value}`
    );
  });

  let $page2 = document.querySelector(urlClose);

  $page2.addEventListener("click", (e) => {
    event.preventDefault();
    ventana.close();
  });
}
