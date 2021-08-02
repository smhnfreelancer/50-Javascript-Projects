const slides = document.querySelectorAll(".panel");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    RemoveClass();
    slide.classList.add("active");
  });
});

const RemoveClass = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
};
