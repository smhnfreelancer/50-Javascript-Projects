const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");
const lineExpersion = RegExp("/\r?\n|\r/g");
textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTag(e.target.value);
  // if (e.key === "Enter") {
  //   setTimeout(() => {
  //     e.target.value = "";
  //   }, 10);
  //   randomSelect();
  // }
});

function createTag(input) {
  const tags = input
    .split(/[.,/\n]/)
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerHTML = `${tag} <i class="fas fa-times" aria-hidden="true"></i>`;
    tagsEl.appendChild(tagEl);
    const croses = document.querySelectorAll(".fa-times");
    croses.forEach((cros) => {
      cros.addEventListener("click", () => {
        cros.parentNode.remove();
      });
    });
  });
}

// function randomSelect() {
//   const times = 30;
//   const intreval = setInterval(() => {
//     const randomTag = pickRandomTag();
//   }, 100);
// }
// function pickRandomTag() {
//   const tags = document.querySelectorAll(".tag");
//   return tags[Math.floor(Math.random() * tags.length)];
// }

// function highlightTag(tag) {
//   tag.classList.add("highlight");
// }

// function unhighlightTag(tag) {
//   tag.classList.remove("highlight");
// }
