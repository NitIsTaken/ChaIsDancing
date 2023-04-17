window.addEventListener('load', function() {
    document.querySelector('.menu-toggle').addEventListener('click', function() {

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function() {
  nav.classList.toggle('active');
});

});
});