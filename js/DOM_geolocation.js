export function geolocation(id) {
  const $where = document.querySelector(id);

  const options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };
  navigator.geolocation.getCurrentPosition(
    function success(pos) {
      console.log(pos);
      $where.innerHTML = `<ul><li>Latitud = ${pos.coords.latitude}</li>
			<li>Longitud= ${pos.coords.longitude}</li> <li>Precision: ${pos.coords.accuracy} metros</li> <a target="_blank" rel="noopener" href="https://www.google.com.ar/maps/@${pos.coords.latitude},${pos.coords.longitude},${pos.coords.accuracy}z">Ver en mapa</a>`;
    },
    function error(err) {
      return ($where.innerHTML = `<h2><mark>ERROR: ${err}</mark></h2>`);
    },
    options
  );
}
