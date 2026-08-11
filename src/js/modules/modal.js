//Modal
const header = document.querySelector(".header__top");
const scroll = window.innerWidth - document.documentElement.clientWidth;
const paddingAdd = (item, scroll) => {
  if (item) {
    item.style.paddingRight = `${parseFloat(getComputedStyle(item).paddingRight) + scroll}px`;
  }
};
const paddingRemove = (item) => {
  if (item) item.style.paddingRight = "";
};
const openModal = (modal) => {
  paddingAdd(header, scroll);
  modal.classList.add("show");
  document.body.classList.add("popup-open");
  paddingAdd(document.body, scroll);
};
const closeModal = (modal) => {
  paddingRemove(header);
  modal.classList.remove("show");
  document.body.classList.remove("popup-open");
  paddingRemove(document.body);
};
const modal = () => {
  const modal = document.querySelector(".modal");
  const thanksMessage = document.querySelector("[data-thanks-message]");
  const errorMessage = document.querySelector("[data-error-message]");
  const trigerBtn = document.querySelectorAll("[data-modal]");

  const allModals = [modal, thanksMessage, errorMessage].filter(Boolean);

  trigerBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      openModal(modal);
    });
  });

  allModals.forEach((modalItem) => {
    modalItem.addEventListener("click", (e) => {
      const content = modalItem.querySelector(
        ".modal__content, .message__modal-content",
      );
      const closeBtn = modalItem.querySelector(".modal__close");

      if (
        e.target === modalItem ||
        (closeBtn && e.target.closest(".modal__close") === closeBtn) || // клик по крестику
        (content && !content.contains(e.target) && e.target !== content)
      ) {
        closeModal(modalItem);
      }
    });
  });
};
export default modal;
export { closeModal };
export { openModal };
