let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll('.carousel-slide img');
  slideIndex += n;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  const container = document.querySelector('.carousel-container');
  const slideWidth = slides[0].clientWidth;
  container.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

