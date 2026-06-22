// Auto slider
var current = 0;
var slides = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.dot');

function goTo(index) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = index;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function nextSlide() {
  var next = (current + 1) % slides.length;
  goTo(next);
}

setInterval(nextSlide, 3500);

