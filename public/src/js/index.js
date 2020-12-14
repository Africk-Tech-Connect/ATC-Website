const burger = document.querySelector('#burger');
const menu  = document.querySelector('#menu');
const cancel  = document.querySelector('#cancel');



burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        cancel.classList.remove('hidden')
        burger.classList.add('hidden')
    }
});


cancel.addEventListener('click', () => {
    if(!menu.classList.contains('hidden')){
        menu.classList.add('hidden');
        cancel.classList.add('hidden')
        burger.classList.remove('hidden')
    }
});



const  openLink = (link) =>{
    window.open(link, '_blank');
}

const showSlides = (n) => {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
}
const plusSlides =(n) => {
    showSlides(slideIndex += n);
  }
  
const currentSlide = (n) => {
    showSlides(slideIndex = n);
}

var slideIndex = 1;
showSlides(slideIndex);