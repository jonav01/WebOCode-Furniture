const navbar = document.querySelector(".navbar__container");
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 150) {
    navbar.style.backgroundColor = "black";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});

const hamburger = document.querySelector(".hamburger__icon");
const nav = document.querySelector(".navbar");
hamburger.addEventListener("click", (e) => {
  nav.classList.toggle("open");
});

// header background change
const header = document.querySelector(".header");
let i = 1;
setInterval(() => {
  if (i === 4) i = 0;
  header.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("./assets/header__images/header__background${
    i + 1
  }.jfif")`;
  i++;
}, 10000);