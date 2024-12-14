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
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scrollUp");

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};
window.addEventListener("scroll", scrollUp);
// change background header
const scrollHeader = () => {
  const header = document.getElementById("navbar");

  if (this.scrollY >= 50) {
    header.classList.add("border-b", "border-yellow-500");
  } else {
    header.classList.remove("border-b", "border-yellow-500");
  }
};
window.addEventListener("scroll", scrollHeader);
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
const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "home";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((navLink) => {
    navLink.classList.remove("active");
    if (navLink.href.includes(current)) {
      navLink.classList.add("active");
    }
  });
};
window.addEventListener("scroll", activeLink);
// scroll reveal animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true,
});
sr.reveal(
  `.home__data, .about__top, .popular__top, .review__top, .review__swiper, .footer__icon, .footer__content, .footer__copyright, .footer__newslatter`
);
sr.reveal(`.home__image`, { delay: 500, scale: 0.5 });

sr.reveal(`.service__card, .popular__card`, { interval: 100 });
sr.reveal(`.about__leaf`, { delay: 1000, origin: "right" });

sr.reveal(`.about__content_1, .about__img_2`, { origin: "right" });
sr.reveal(`.about__content_2, .about__img_1, .review__leaf, .footer__floral`, {
  origin: "left",
});
