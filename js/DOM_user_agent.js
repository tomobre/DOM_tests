export function UserA(id) {
  let d = document,
    $id = d.querySelector(id),
    ua = navigator.userAgent,
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|ie mobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.ie() ||
          this.edge() ||
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera()
        );
      },
    };

  $id.innerHTML = `
<ul>
<li>User agent: <b> ${ua}<b> </li>
<li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b</li>
<li>Navegador: <b> ${isBrowser.any()}<b></li>
</ul>
  `;

  if (isBrowser.chrome()) {
    $id.innerHTML += `<p><mark>Contenido exclusivo de chrome</mark></p>`;
  }
  if (isDesktop.mac()) {
    $id.innerHTML += `<p><mark>Contenido exclusivo de mac</mark></p>`;
    if (isDesktop.linux()) {
      $id.innerHTML += `<p><mark>Contenido exclusivo de linux</mark></p>`;
    }
  }
}
