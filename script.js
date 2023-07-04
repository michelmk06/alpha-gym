const menuBtn = document.querySelector(".btn-more");
const aboutParagraph = document.querySelector(".about-paragraph");

menuBtn.addEventListener("click", () => {
  aboutParagraph.classList.add("full-height");
});
