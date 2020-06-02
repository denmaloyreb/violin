wow = new WOW({

    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true

})
wow.init();

var openMobile = document.querySelector(".mobile-menu");

openMobile.addEventListener('click', function() {
    document.querySelector(".menu-mobile").style.display = 'block';
})

var closeMobile = document.querySelector(".close-btn-mobile");

closeMobile.addEventListener('click', function() {
    document.querySelector(".menu-mobile").style.display = 'none';
})

var closeMobileLink = document.querySelector(".mobile-list");

closeMobileLink.addEventListener('click', function() {

    document.querySelector(".menu-mobile").style.display = 'none';

})