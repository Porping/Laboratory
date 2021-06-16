const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);

const m_menu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header .container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  m_menu.classList.toggle("active");
});
