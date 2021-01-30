/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 120}); 
sr.reveal('.home__img',{delay: 300}); 
sr.reveal('.home__social-icon',{ interval: 120}); 
// sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 300}); 
sr.reveal('.about__text',{delay: 300}); 
// sr.reveal('.skills__subtitle',{}); 
// sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 120}); 
sr.reveal('.skills__img',{delay: 180});
sr.reveal('.work__img',{interval: 120}); 
sr.reveal('.project__img',{interval: 120}); 
sr.reveal('.contact__input',{interval: 120}); 