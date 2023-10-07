/* document.querySelector("#btnSlide1").addEventListener("click", () => {
  document.querySelector("#slide1").classList.add("open");
  document.querySelector("#slide2").classList.remove("open");
  document.querySelector("#slide3").classList.remove("open");
  document.querySelector("#slide4").classList.remove("open");
  document.querySelector("#slide5").classList.remove("open");
  document.querySelector("#slide6").classList.remove("open");
});
document.querySelector("#btnSlide2").addEventListener("click", () => {
  document.querySelector("#slide2").classList.add("open");
  document.querySelector("#slide1").classList.remove("open");
  document.querySelector("#slide3").classList.remove("open");
  document.querySelector("#slide4").classList.remove("open");
  document.querySelector("#slide5").classList.remove("open");
  document.querySelector("#slide6").classList.remove("open");
});
document.querySelector("#btnSlide3").addEventListener("click", () => {
  document.querySelector("#slide3").classList.add("open");
  document.querySelector("#slide1").classList.remove("open");
  document.querySelector("#slide2").classList.remove("open");
  document.querySelector("#slide4").classList.remove("open");
  document.querySelector("#slide5").classList.remove("open");
  document.querySelector("#slide6").classList.remove("open");
});
document.querySelector("#btnSlide4").addEventListener("click", () => {
  document.querySelector("#slide4").classList.add("open");
  document.querySelector("#slide1").classList.remove("open");
  document.querySelector("#slide2").classList.remove("open");
  document.querySelector("#slide3").classList.remove("open");
  document.querySelector("#slide5").classList.remove("open");
  document.querySelector("#slide6").classList.remove("open");
});
document.querySelector("#btnSlide5").addEventListener("click", () => {
  document.querySelector("#slide5").classList.add("open");
  document.querySelector("#slide1").classList.remove("open");
  document.querySelector("#slide2").classList.remove("open");
  document.querySelector("#slide3").classList.remove("open");
  document.querySelector("#slide4").classList.remove("open");
  document.querySelector("#slide6").classList.remove("open");
});
document.querySelector("#btnSlide6").addEventListener("click", () => {
  document.querySelector("#slide6").classList.add("open");
  document.querySelector("#slide1").classList.remove("open");
  document.querySelector("#slide2").classList.remove("open");
  document.querySelector("#slide3").classList.remove("open");
  document.querySelector("#slide4").classList.remove("open");
  document.querySelector("#slide5").classList.remove("open");
});
 */
// Función para cambiar la clase "open" en los elementos deslizantes
function toggleSlide(slideId) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => {
    if (slide.id === slideId) {
      slide.classList.add("openSlide");
    } else {
      slide.classList.remove("openSlide");
    }
  });
}

// Asignar la función a los eventos click de los botones
document.querySelector("#btnSlide1").addEventListener("click", () => {
  toggleSlide("slide1");
});

document.querySelector("#btnSlide2").addEventListener("click", () => {
  toggleSlide("slide2");
});

document.querySelector("#btnSlide3").addEventListener("click", () => {
  toggleSlide("slide3");
});

document.querySelector("#btnSlide4").addEventListener("click", () => {
  toggleSlide("slide4");
});

document.querySelector("#btnSlide5").addEventListener("click", () => {
  toggleSlide("slide5");
});

document.querySelector("#btnSlide6").addEventListener("click", () => {
  toggleSlide("slide6");
});
