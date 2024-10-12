const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

let x = "git test";

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
