// toggle button
const navMenu = document.getElementById("nav_menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburg = document.getElementById("hamburg");

hamburg.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburg.classList.toggle("ri-close-large-line");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburg.classList.toggle("ri-close-large-line");
  });
});
// show scroll up
// change background header
// swiper
// scroll section active link
// scroll reveal animation
