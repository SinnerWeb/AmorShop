const burgerButton = document.querySelector(".burger-button");
const navbarMenu = document.querySelector(".header__nav");

burgerButton.addEventListener("click", () => {
  navbarMenu.classList.toggle("show");
});
