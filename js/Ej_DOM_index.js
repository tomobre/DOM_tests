import { slider } from "./carrusel.js";
import { Countdown } from "./DOM_countdown.js";
import { Dark } from "./DOM_Dark_Button.js";
import { webcam } from "./DOM_deteccion_webcam.js";
import { Keyboard } from "./DOM_eventos_teclado.js";
import { filterS } from "./DOM_Filter-Search.js";
import { geolocation } from "./DOM_geolocation.js";
import hamburgerMenu from "./DOM_menu_hamburguesa.js";
import { narrator } from "./DOM_narrator.js";
import { OnOff } from "./DOM_Online.js";
import { RelojDigital, Alarma } from "./DOM_reloj_digital.js";
import { Responsive } from "./DOM_Responsive_Deisgn.js";
import { responsiveMenu } from "./DOM_Responsive_Side_Menu.js";
import { ResponsiveTest } from "./DOM_Responsive_test.js";
import { ScrollUp } from "./DOM_scrollUpButton.js";
import { Sort } from "./DOM_sorteo.js";
import { UserA } from "./DOM_user_agent.js";
import { contactFormValidations } from "./DOM_Validaciones_formulario.js";
import { videoIntersection } from "./DOM_Video_intersection_observer.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", "#NavBar a");
  RelojDigital(".InReloj", ".DetReloj", ".reloj");
  Alarma(".InAlarma", ".DetAlarma", "./all-my-loving-remastered-2009.mp3");
  Keyboard("#bolita", "#entornoBolita");
  Countdown("#countdown", "January 28,2021 00:00", "Feliz cumple Tom!");
  Responsive(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/embed/lHJN6IO6jYI" target="_blank">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/lHJN6IO6jYI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  Responsive(
    "gmaps",
    "(min-width:1024px)",
    `<a href = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13136.490988109781!2d-58.42875065!3d-34.6010575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca75c5c37ffb%3A0x8c53f17419f73304!2sCentro%20M%C3%A9dico%20Integral%20Fitz%20Roy!5e0!3m2!1ses!2sar!4v1604153852746!5m2!1ses!2sar" target = "_blank" > Ver mapa</a>`,
    `   <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13136.490988109781!2d-58.42875065!3d-34.6010575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca75c5c37ffb%3A0x8c53f17419f73304!2sCentro%20M%C3%A9dico%20Integral%20Fitz%20Roy!5e0!3m2!1ses!2sar!4v1604153852746!5m2!1ses!2sar"
        width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
        tabindex="0"></iframe>`
  );
  ScrollUp(".scrollUpButton");
  ResponsiveTest("#url", "#abrir", "#close", "#ancho", "#alto");
  UserA("#user-agent");
  webcam("#videoReq");
  geolocation("#geo");
  filterS(".card-filter", ".card");
  Sort("#sortNow");
  slider();
  responsiveMenu();
  videoIntersection();
  contactFormValidations();
  narrator();
});

window.addEventListener(
  "keydown",
  function (e) {
    if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  },
  false
);

Dark("#Dark-button", "dark-mode");
OnOff();
