const slideshow = document.querySelector(".slideshow");
let currentSlide = 0;

function showSlide() {
  const slides = slideshow.querySelectorAll("img");
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
  });

  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  setTimeout(showSlide, 2000); // Change slide every 2 seconds
}

showSlide();