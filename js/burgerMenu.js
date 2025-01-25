const body = document.body;
const nav = document.querySelector('.header__nav');
const burgerButton = document.querySelector('.header__burger');
const header = document.getElementById('header');

if (nav && burgerButton) {
  burgerButton.addEventListener('click', () => {
    nav.classList.toggle('active');    
    burgerButton.classList.toggle('active');    
    body.classList.toggle('lock');
    if (header.classList.contains('blur-header')) {
      header.classList.remove('blur-header')
    }         
    
    nav.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');    
        burgerButton.classList.remove('active');    
        body.classList.remove('lock'); 
      })
    });    
  });
}