// Declaring Vaiables
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

// Next And Previous Click Functions
let currentActive = 1;

next.addEventListener("click", () => {
  if (currentActive < circles.length) {
    currentActive++;
  } else {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  if (currentActive > 1) {
    currentActive--;
  } else {
    currentActive = 1;
  }
  update();
});

// disable Previous and Next at their end

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
    if (currentActive === 1) {
      prev.disabled = true;
    } else if (currentActive === circles.length) {
      next.disabled = true;
    } else {
      prev.disabled = false;
      next.disabled = false;
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
}
