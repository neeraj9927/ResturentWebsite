let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if(window.scrollY >= 600){
    navbar.classList.add('navbar_background');
  }else{
    navbar.classList.remove('navbar_background');
  }
});


var typed = new Typed(".order", {
    strings: ["Order Your"],
    typeSpeed: 250,
    loop: false,
    cursorChar: "",
  });