const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

const cart = document.querySelector(".cart");
const menuCart = document.querySelector(".menu__cart");

function menuActive() {
  menu.classList.toggle("active");
}

function menuCartactive() {
  menuCart.classList.toggle("active__cart");
}
