import "/src/sass/style.scss";
import slider from "./modules/slider";
import toggleMenu from "./modules/header";
import modal, { openModal } from "./modules/modal";
import forms from "./modules/forms";
import animate from "./modules/animate";
import initAccordion from "./modules/accordion";

window.addEventListener("DOMContentLoaded", () => {
  toggleMenu();
  modal();
  slider();
  forms();
  animate();
  initAccordion(".industry__acardeon", ".acardeon__block", "open");
  initAccordion(".accordion__card", ".accordion-img", "open");
});
