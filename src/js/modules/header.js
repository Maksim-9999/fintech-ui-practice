//Header

const toggleMenu = () => {
  const burger = document.querySelector(".burger"),
    header = document.querySelector(".header__block"),
    close = document.querySelector(".menu__close"),
    items = document.querySelectorAll(".menu__item"),
    search = document.querySelector(".header__search"),
    seacrhClose = document.querySelector(".search-close");
  try {
    const openMenu = () => {
      header.classList.add("menu-active");
      document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
      header.classList.remove("menu-active");
      document.body.style.overflow = "";
    };

    burger.addEventListener("click", () => {
      openMenu();
    });

    close.addEventListener("click", () => {
      closeMenu();
    });

    const removeItem = (item) => {
      item.classList.remove("active");
    };
    items.forEach((item) => {
      item.addEventListener("click", () => {
        if (item.classList.contains("active")) {
          removeItem(item);
        } else {
          items.forEach((i) => removeItem(i));
          item.classList.add("active");
        }
      });
    });

    const language = document.querySelector(".menu-language");

    language.addEventListener("click", () => {
      language.classList.toggle("active");
    });

    window.matchMedia("(min-width: 1440px)").addEventListener("change", (e) => {
      if (e.matches) {
        closeMenu();
      }
    });

    search.addEventListener("click", () => {
      document.querySelector(".search-block").classList.add("search-show");
    });
    seacrhClose.addEventListener("click", () => {
      document.querySelector(".search-block").classList.remove("search-show");
    });
  } catch (e) {}
};
export default toggleMenu;
