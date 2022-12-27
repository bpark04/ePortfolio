'use strict'


// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
// https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

// Transform navbar when scrolled down
let navbar = document.querySelector('#navbar');
let navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar__dark');
  } else {
    navbar.classList.remove('navbar__dark');
  }
});

// Transform home to be transparent when scrolled down
let home = document.querySelector('.home__container');
let homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  let opacity = 1 - (window.scrollY / homeHeight);
  home.style.opacity = opacity;
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

// Projects
let workBtnContainer = document.querySelector('.work__categories');
let projectContainer = document.querySelector('.work__projects');
let projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  let filter = e.target.dataset.filter;
  if (filter === null) {
    return;
  }

  let active = document.querySelector('.category__btn.active');
  active.classList.remove('active');
  e.target.classList.add('active');


  projectContainer.classList.add('animation-out');
  

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('animation-out');
  }, 300)

});