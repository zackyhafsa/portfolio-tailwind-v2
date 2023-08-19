const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
});

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    navMenu.classList.add("hidden");
  }
});
