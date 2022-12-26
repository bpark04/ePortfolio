'use strict'


// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

// Transform navbar to be transparent when scrolled down
let navbar = document.querySelector('#navbar');
let navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar__dark');
  } else {
    navbar.classList.remove('navbar__dark');
  }
});

// to scroll to the target section
const scrollTo = (e) => {
  let target = e.target;
  // to get data-link value from HTML
  let link = target.dataset.link;
  if (link === null) {
    return;
  }
  let scroll = document.querySelector(link);
  scroll.scrollIntoView({ behavior: 'smooth' });
}; 

// Handle scrolling when clicking on navbar element
let navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', scrollTo);

let contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', scrollTo);
