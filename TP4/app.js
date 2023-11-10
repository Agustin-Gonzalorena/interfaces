const btnBurger = document.querySelector(".burgerBtn");

btnBurger.addEventListener("mouseover", () => {
  console.log("hola");
  document.querySelectorAll(".lineBurger").forEach((line) => {
    line.classList.add("hover");
  });
  btnBurger.addEventListener("mouseout", () => {
    document.querySelectorAll(".lineBurger").forEach((line) => {
      line.classList.remove("hover");
    });
  });
});

const header = document.querySelector("header");
const logo = document.querySelector(".logoBox");
const miniLogo = document.querySelector(".miniLogo");
document.addEventListener("scroll", () => {
  if (window.scrollY < 103) {
    miniLogo.style.opacity = 0;
  }
  if (window.scrollY > 103) {
    header.classList.add("scrollHeader");
    miniLogo.style.opacity = window.scrollY / 400;
  } else {
    header.classList.remove("scrollHeader");
  }
  logo.style.opacity = 1 - window.scrollY / 160;
  logo.style.scale = 1 - window.scrollY / 200;
});
