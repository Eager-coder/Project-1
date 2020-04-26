// Navigation
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links-responsive');
burger.addEventListener('click', ()=>{
    navLinks.classList.toggle('nav-links-active')
    if (navLinks.classList.contains('nav-links-active')){
        navLinks.style.maxHeight = '460px' ;
    }
    else{
        navLinks.style.maxHeight = 0;
    }
})
// Dropdown  topnav links
const dropdownBtn = document.querySelector('.dropdown-btn-mobile');
const dropdownList = document.querySelector('.dropdown-list-mobile');
var check = false;
dropdownBtn.addEventListener('click', ()=>{
    if(check == false){
        dropdownList.style.maxHeight = dropdownList.scrollHeight + "px"; 
        check = true
    }
    else{
        dropdownList.style.maxHeight = 0;
        check = false;
    }
})
//carousel
const carousel = document.querySelector('.carousel-container');
const dot1 = document.querySelector('#dot1');
const dot2 = document.querySelector('#dot2');
const dot3 = document.querySelector('#dot3');
var imageWidth = document.querySelector('#img').getBoundingClientRect().width;

dot1.addEventListener('click', ()=>{
    dot1.classList.add('dot-active');
    dot2.classList.remove('dot-active');
    dot3.classList.remove('dot-active');
    carousel.scrollLeft = 0;
    console.log('heool')
})
dot2.addEventListener('click', ()=>{
    dot2.classList.add('dot-active');
    dot1.classList.remove('dot-active');
    dot3.classList.remove('dot-active');
    carousel.scrollLeft = 1200;
    console.log('heool')
})
dot3.addEventListener('click', ()=>{
    dot3.classList.add('dot-active');
    dot1.classList.remove('dot-active');
    carousel.scrollLeft = 1200*2;

    dot2.classList.remove('dot-active');

    console.log('heool')
})

// mini carpusel
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
var miniCarousel = document.querySelector('.blog-carousel');
var miniCarouselWidth = miniCarousel.querySelector('.blog-item').getBoundingClientRect().width;

nextBtn.addEventListener('click', ()=>{
    miniCarousel.scrollLeft += miniCarouselWidth;
    console.log('hello')
})
prevBtn.addEventListener('click', ()=>{
    miniCarousel.scrollLeft += -miniCarouselWidth;
    console.log('hello')
})

