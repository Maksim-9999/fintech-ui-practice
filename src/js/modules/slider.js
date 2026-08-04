import Swiper from "swiper";
import { Scrollbar, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import rusteze from "/src/img/partners/rusteze.png";
import dinoco1 from "/src/img/partners/dinoco1.png";
import planetpizza from "/src/img/partners/planetpizza.png";
import buynlarge from "/src/img/partners/buynlarge.png";

const images = [rusteze, dinoco1, planetpizza, buynlarge];
//Slider partners
const slider = () => {
  try {
    const swiper = new Swiper(".partners-swiper", {
      modules: [Scrollbar, Mousewheel],
      slidesPerView: 3,
      spaceBetween: 40,
      mousewheel: {
        forceToAxis: true,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        hide: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 4,
          spaceBetween: 60,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 80,
        },
        1920: {
          slidesPerView: 6,
          spaceBetween: 120,
        },
      },
    });
  } catch (e) {}

  try {
    const swiper = new Swiper(".comments-swiper", {
      modules: [Scrollbar, Mousewheel],
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 20,
      initialSlide: 1,

      breakpoints: {
        1440: {
          slidesPerView: 1.5,
        },
        1920: {
          spaceBetween: 30,
        },
      },
      mousewheel: {
        forceToAxis: true,
      },
      scrollbar: {
        el: ".swiper_comments-scrollbar",
        draggable: true,
        hide: false,
        snapOnRelease: true,
      },
    });
  } catch (e) {}
  try {
    const images = [rusteze, dinoco1, planetpizza, buynlarge];
    const swiper = new Swiper(".studios-swipper", {
      modules: [Scrollbar, Mousewheel, Pagination],
      slidesPerView: 1,

      mousewheel: {
        forceToAxis: true,
      },
      scrollbar: {
        el: ".swiper_studios-scrollbar",
        draggable: true,
        hide: false,
        snapOnRelease: true,
        dragSize: 100,
      },
      breakpoints: {
        768: {
          scrollbar: {
            dragSize: 100,
          },
        },
        1400: {
          scrollbar: {
            dragSize: 130,
          },
        },
        1920: {
          scrollbar: {
            dragSize: 180,
          },
        },
      },
      pagination: {
        el: document.querySelector(".studios-pagination"),
        clickable: true,
        renderBullet: (index, className) => {
          return `<div class="${className}">
        <img src="${images[index]}" alt="" />
      </div>`;
        },
      },
    });
  } catch (e) {}
  try {
    const swiper = new Swiper(".competence-swiper", {
      modules: [Scrollbar, Mousewheel],
      slidesPerView: 1.5,
      centeredSlides: true,
      spaceBetween: 20,
      initialSlide: 0,
      breakpoints: {
        768: {
          slidesPerView: 3,
          initialSlide: 1,
          enabled: false,
        },
      },
      mousewheel: {
        forceToAxis: true,
      },
    });
  } catch (e) {}
};

export default slider;
