const left = document.querySelector(".left");
const right = document.querySelector(".right");
const contentContainer = document.querySelector(".content-container");

left.addEventListener("mouseenter", () =>
  contentContainer.classList.add("hover-left")
);
left.addEventListener("mouseleave", () =>
  contentContainer.classList.remove("hover-left")
);
right.addEventListener("mouseenter", () =>
  contentContainer.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  contentContainer.classList.remove("hover-right")
);
