import { closeModal } from "./modal";

const forms = () => {
  try {
    const forms = document.querySelectorAll("form");
    forms.forEach((item) => {
      bindPostData(item);
    });
    const showThanks = () => {
      const thanksModal = document.querySelector("[data-thanks-message]");
      thanksModal.classList.add("show");
      closeModal();
      setTimeout(() => {
        thanksModal.classList.remove("show");
      }, 3000);
    };
    const showFail = () => {
      const failModal = document.querySelector("[data-error-message]");
      failModal.classList.add("show");
      setTimeout(() => {
        failModal.classList.remove("show");
      }, 3000);
    };

    const postData = (url, data) => {
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    };

    const bindPostData = (form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        console.log("форма отправляется");

        const formData = new FormData(form);
        const dataObject = Object.fromEntries(formData);

        postData("/api/submit", dataObject)
          .then((res) => {
            if (!res.ok) throw new Error("Ошибка сервера: " + res.status);
            return res.json();
          })
          .then(() => {
            showThanks();
            form.reset();
          })
          .catch((err) => {
            console.error(err);
            showFail();
          });
      });
    };
  } catch (e) {
    console.error(e);
  }
};

export default forms;
