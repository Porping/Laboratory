const navbarBurger = document.querySelector(".navbar-burger");
const navbarMenu = document.querySelector(".navbar-menu");

navbarBurger.addEventListener("click", function toggleMenu() {
  navbarBurger.classList.toggle("is-active");
  navbarMenu.classList.toggle("is-active");
});
