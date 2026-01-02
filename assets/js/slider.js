let slideIndex = 0;
const slides = document.querySelectorAll(".slider img");

function showSlide() {
  slides.forEach((img, i) => {
    img.style.display = i === slideIndex ? "block" : "none";
  });
  slideIndex = (slideIndex + 1) % slides.length;
}

if (slides.length > 0) {
  showSlide();
  setInterval(showSlide, 3000);
}
