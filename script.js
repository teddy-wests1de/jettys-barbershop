"use strict";
// Get & Assign page controls
const header = document.querySelector(".header");
const menu = document.querySelector(".menu");
const btnMenu = document.querySelector(".btn-menu");
const desktopMenu = document.querySelector(".desktop-menu");
const headerHeight = header.getBoundingClientRect().height;
const styleCards = document.querySelector(".cards");
const subHeading = document.querySelector(".subheading");
const sections = document.querySelectorAll(".section");
const contactForm = document.querySelector(".contact-form");

const headerObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) entry.target.classList.add("sticky");
    else entry.target.classList.remove("sticky");
    console.log(entry.target);
  },
  {
    root: null,
    threshold: 0.1,
    rootMargin: `-${headerHeight}px`,
  }
);

headerObserver.observe(header);

// Buttons
btnMenu.addEventListener("click", function () {
  desktopMenu.classList.toggle("hidden");
});

menu.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    desktopMenu.classList.add("hidden");
    const link = e.target;
    console.log(link.dataset.list);

    const siblings = link
      .closest(".desktop-menu")
      .querySelectorAll(".nav__link");

    const sections = Array.from(document.querySelectorAll(".section"));
    sections.forEach((section) => {
      section.classList.add("hideSection");
    });
    sections[link.dataset.list].classList.remove("hideSection");
  }
});
