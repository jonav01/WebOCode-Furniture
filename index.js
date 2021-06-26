const navbar = document.querySelector(".navbar__container");
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 150) {
    navbar.style.backgroundColor = "black";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});