const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

for (let load = 0; load < 99; load++) {
  setTimeout(function blurring() {
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    console.log(load);
  }, load * 8);
}
