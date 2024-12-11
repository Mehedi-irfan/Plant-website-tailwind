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
const swiper = new Swiper(".swiper", {
  // Optional parameters
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// scroll section active link
// scroll reveal animation
