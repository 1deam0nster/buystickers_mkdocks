document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slider-item");
    const totalSlides = slides.length;
  
    document.querySelector(".slider-next").addEventListener("click", function() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    });
  
    document.querySelector(".slider-prev").addEventListener("click", function() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlider();
    });
  
    function updateSlider() {
      const offset = -currentSlide * 100;
      document.querySelector(".slider-wrapper").style.transform = `translateX(${offset}%)`;
    }
  });
  