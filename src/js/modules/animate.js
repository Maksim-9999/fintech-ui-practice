const animate = () => {
  const elements = document.querySelectorAll(
    "[data-animate-top], [data-animate-bottom], [data-animate-left], [data-animate-center], [data-animate-flip], [data-animate-right]",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("animated");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.3 },
  );
  elements.forEach((el) => {
    observer.observe(el);
  });
};
export default animate;
