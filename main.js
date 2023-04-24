let burgerhi = document.querySelector('.burger');
let navburg = document.getElementById('navburg');


burgerhi.addEventListener('click', function() {
    navburg.classList.toggle('active');
    console.log('clicked');
})