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
const inputDate = document.querySelector('#date');
const inputTime = document.querySelector('#time');
const displayBooking = document.querySelector('.appointment');
const btnBook = document.querySelector('.btnBook');
const firstName = document.querySelector('.first-name');
// inputDate.value = new Date;

const headerObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) entry.target.classList.add("sticky");
    // else entry.target.classList.remove("sticky");
    console.log(entry.target);
  },
  {
    root: null,
    threshold: 0.1,
    rootMargin: `-${headerHeight}px`,
  }
);

headerObserver.observe(header);

// Load Price List


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


btnBook.addEventListener('click', function(e){
  e.preventDefault();
  // inputDate.value = new Date().toISOString().split('T')[0];
  const bookingDate = new Date(inputDate.value);
  const day = `${bookingDate.getDate()}`.padStart(2, 0);
  const month = `${bookingDate.getMonth()+1}`.padStart(2, 0);
  const year = bookingDate.getFullYear();
  console.log(bookingDate.getDay());
  displayBooking.textContent = `Hi ${firstName.value},Your hair cutting appointment is booked for ${day}/${month}/${year} at ${inputTime.value}.`;
  displayBooking.style.opacity = '1'
})