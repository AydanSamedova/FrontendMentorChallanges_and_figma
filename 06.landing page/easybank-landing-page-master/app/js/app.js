const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.overlay');
const navbar = document.querySelector('.header_navbar')




btnHamburger.addEventListener('click', function() {

    btnHamburger.classList.toggle("open");
    overlay.classList.toggle('overlay-visible')

    navbar.classList.toggle('navbar-visible')

});