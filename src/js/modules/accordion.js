const initAccordion = (cardSelector, buttonSelector, openClass) => {
  try {
    const cards = document.querySelectorAll(cardSelector);

    const openCard = (card) => {
      if (!card) return;
      card.classList.add(openClass);
    };

    const closeCard = (card) => {
      if (!card) return;
      card.classList.remove(openClass);
    };

    const toggleCard = (clickedCard) => {
      const wasOpen = clickedCard.classList.contains(openClass);
      cards.forEach((card) => closeCard(card));
      if (!wasOpen) openCard(clickedCard);
    };

    cards.forEach((card) => {
      const accordionButton = card.querySelector(buttonSelector);
      if (!accordionButton) return;
      accordionButton.addEventListener("click", () => {
        toggleCard(card);
      });
    });
  } catch (e) {
    console.error(e);
  }
};

export default initAccordion;
