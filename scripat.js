let navbar = document.querySelector(".navbar");
let nav_link = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 700) {
    navbar.classList.add("navbar_background");
  } else {
    navbar.classList.remove("navbar_background");
  }
});

var typed = new Typed(".order", {
  strings: ["Order Your"],
  typeSpeed: 250,
  loop: false,
  cursorChar: "",
});


// back to top btn
var backtoTopButton = document.getElementById('backtoTopButton');
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 500) {
        backtoTopButton.style.display = "block";
    }
    else{
        backtoTopButton.style.display = "none";
    }
})

backtoTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
// End back to top btn
