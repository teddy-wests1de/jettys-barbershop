"use strict";
// Get & Assign page controls
const header = document.querySelector(".header");
const menu = document.querySelector(".menu");
const btnMenu = document.querySelector(".btn-menu");
const desktopMenu = document.querySelector(".desktop-menu");
const btnBooking = document.querySelector(".booking");
const headerHeight = header.getBoundingClientRect().height;
const styleCards = document.querySelector(".cards");
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
  styleCards.style.display = "none";
  contactForm.style.display = "block";
};

// Buttons
btnMenu.addEventListener("click", function () {
  desktopMenu.classList.toggle("hidden");
});

menu.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    console.log(link);
    const siblings = link
      .closest(".desktop-menu")
      .querySelectorAll(".nav__link");

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.color = "rgba(0, 0, 255, 0.519)";
        // console.log(link);
      }
    });
    link.style.color = "#f00";
    switch (link.id) {
      case "contact":
        contactUs();
        break;
    }
  }
});
btnBooking.addEventListener("click", contactUs);
