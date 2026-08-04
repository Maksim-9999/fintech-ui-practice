//Modal
const header = document.querySelector(".header__top");
const scroll = window.innerWidth - document.documentElement.clientWidth;
function paddingAdd(item, scroll) {
  if (item) {
    item.style.paddingRight = `${parseFloat(getComputedStyle(item).paddingRight) + scroll}px`;
  }
}
function paddingRemove(item) {
  if (item) item.style.paddingRight = "";
}
const openModal = (modal) => {
  paddingAdd(header, scroll);
  modal.classList.add("show");
  document.body.classList.add("popup-open");
};
const closeModal = () => {
  const modal = document.querySelector(".modal");
  paddingRemove(header);
  modal.classList.remove("show");
  document.body.classList.remove("popup-open");
};
function modal() {
  const modal = document.querySelector(".modal"),
    trigerBtn = document.querySelectorAll("[data-modal]");
  trigerBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      openModal(modal);
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest(".modal__close")) {
      closeModal(modal);
    }
  });
}
export default modal;
export { closeModal };
export { openModal };
