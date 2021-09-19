const menuBtn = document.querySelector(".menu-btn");
const navContainer = document.querySelector(".header-links");
const active = document.querySelector(".active");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navContainer.classList.remove("none-class");
    navContainer.classList.remove("active");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navContainer.classList.add("none-class");
    navContainer.classList.add("active");
    menuOpen = false;
  }
});
