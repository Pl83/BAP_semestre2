let burgerhi = document.querySelector('.burger');
let navburg = document.getElementById('navburg');


burgerhi.addEventListener('click', function() {
    navburg.classList.toggle('active');
    console.log('clicked');
})

// GSAP


TweenMax.from(".liseraire", 1, {
    y: -490,
    ease: Expo.easeInOut
});

TweenMax.from("#lienIndex", 1, {
    opacity: 0,
    x: -5,
    ease: Expo.easeInOut
});


TweenMax.staggerFrom("#navburg ul li", 1, {
    opacity: 0,
    x: -10,
    delay: 0.2,
    ease: Expo.easeInOut
});

TweenMax.from(".logo", 1, {
    opacity: 0,
    x: -10,
    delay: 0.4,
    ease: Expo.easeInOut
});


TweenMax.from(".h1sport", 1, {
    opacity: 0,
    x: -10,
    delay: 0.4,
    ease: Expo.easeInOut
});

