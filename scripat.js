let navbar = document.querySelector(".navbar");
let nav_link = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 700) {
    navbar.classList.add("navbar_background");
    nav_link.classList.add("nav_link_active");
  } else {
    navbar.classList.remove("navbar_background");
    nav_link.classList.remove("nav_link_active");
  }
});

var typed = new Typed(".order", {
  strings: ["Order Your"],
  typeSpeed: 250,
  loop: false,
  cursorChar: "",
});
