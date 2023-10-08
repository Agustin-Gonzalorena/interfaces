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
function setActiveButton(buttonId) {
  const buttons = document.querySelectorAll(".btnSlide");
  buttons.forEach((button) => {
    if (button.id === buttonId) {
      button.classList.add("activeBtnImg");
    } else {
      button.classList.remove("activeBtnImg");
    }
  });
}

document.querySelector("#btnSlide1").addEventListener("click", () => {
  toggleSlide("slide1");
  setActiveButton("btnSlide1");
});

document.querySelector("#btnSlide2").addEventListener("click", () => {
  toggleSlide("slide2");
  setActiveButton("btnSlide2");
});

document.querySelector("#btnSlide3").addEventListener("click", () => {
  toggleSlide("slide3");
  setActiveButton("btnSlide3");
});

document.querySelector("#btnSlide4").addEventListener("click", () => {
  toggleSlide("slide4");
  setActiveButton("btnSlide4");
});

document.querySelector("#btnSlide5").addEventListener("click", () => {
  toggleSlide("slide5");
  setActiveButton("btnSlide5");
});

document.querySelector("#btnSlide6").addEventListener("click", () => {
  toggleSlide("slide6");
  setActiveButton("btnSlide6");
});
