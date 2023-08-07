"use strict";
// Get & Assign page controls
const header = document.querySelector(".header");
const menu = document.querySelector(".menu");
const btnMenu = document.querySelector(".btn-menu");
const desktopMenu = document.querySelector(".desktop-menu");
const btnBooking = document.querySelector(".booking");
const headerHeight = header.getBoundingClientRect().height;
const styleCards = document.querySelector(".cards");
const subHeading = document.querySelector('.subheading');
const sections = document.querySelectorAll('.section');
const contactForm = document.querySelector(".contact-form");

// Objects

const headerObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) entry.target.classList.add("sticky");
    // else entry.target.classList.remove('sticky');
    console.log(entry.target);
  },
  {
    root: null,
    threshold: 0.1,
    rootMargin: `-${headerHeight}px`,
  }
);

headerObserver.observe(header);

// Functions

const contactUs = function () {
  // styleCards.style.display = "none";
  subHeading.style.display = 'none';
  sections.forEach(section => section.style.display = 'none')
  contactForm.style.display = "block";
};

const displayPriceList = function() {
  sections.forEach(section => section.style.display = 'none')

}
// Buttons 
btnMenu.addEventListener("click", function () {
  desktopMenu.classList.toggle("hidden");
});

menu.addEventListener("click", function (e) {
  // e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    // console.log(link)
    const siblings = link
      .closest(".desktop-menu")
      .querySelectorAll(".nav__link");

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.color = "rgba(0, 0, 0, 0.5)";
        // console.log(el);
      }
    });
    link.style.color = "rgba(255, 255, 255, 0.502)";
  }
});
btnBooking.addEventListener("click", contactUs);
