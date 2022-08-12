const toTop = document.querySelector(".to-top");

window.addEventListener("scoll", () => {
  if (window.pageYOffset > 100) {
  toTop.classList.add("active");
} else {
  toTop.classList.remove("active");
}
})