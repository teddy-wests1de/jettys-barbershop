'use strict'
// Get & Assign page controls
const header = document.querySelector('.header');

// Make header Sticky
const stickyHeader= function (entries) {
    const [entry] = entries;
    if(!entry.isIntersecting) header.classList.add('sticky')
    else header.classList.remove('sticky')
    console.log(entry)
}

const headerObserver = new IntersectionObserver(stickyHeader, {
    root: null,
    threshold: 0.1,
});

headerObserver.observe(header)
