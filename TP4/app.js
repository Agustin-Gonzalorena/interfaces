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
  logo.style.opacity = 1 - window.scrollY / 120;
  logo.style.scale = 1 - window.scrollY / 200;
});

document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 1400) {
    document.querySelector("#cardP1").classList.add("cardAnim");
    document.querySelector("#cardP2").classList.add("cardAnim");
    document.querySelector("#cardP3").classList.add("cardAnim");
  }
});

//conportamiento section 8

const sBlanco = document.querySelector(".boxSpiderBlanco");
const sNegro = document.querySelector(".boxSpiderBlack");
const sRojo = document.querySelector(".boxSpiderNormal");
const boxBlur = document.querySelector(".boxBlur");
const section8 = document.querySelector(".section8");

const arraySpider = [sBlanco, sNegro, sRojo];

const addHoverSpider = (spider) => {
  spider.classList.add("boxSpiderHover");
  boxBlur.classList.add("open");
  arraySpider.forEach((s) => {
    if (s !== spider) {
      s.classList.add("boxSpiderNoHover");
    }
  });
  switch (spider) {
    case sBlanco:
      section8.classList.add("hoverSpiderBlanco");
      break;
    case sNegro:
      section8.classList.add("hoverSpiderBlack");
      break;
    case sRojo:
      section8.classList.add("hoverSpiderNormal");
      break;
  }
};
const removeHoverSpider = (spider) => {
  arraySpider.forEach((s) => {
    s.classList.remove("boxSpiderNoHover");
    s.classList.remove("boxSpiderHover");
  });
  boxBlur.classList.remove("open");
  switch (spider) {
    case sBlanco:
      section8.classList.remove("hoverSpiderBlanco");
      break;
    case sNegro:
      section8.classList.remove("hoverSpiderBlack");
      break;
    case sRojo:
      section8.classList.remove("hoverSpiderNormal");
      break;
  }
};
sBlanco.addEventListener("mouseover", () => {
  addHoverSpider(sBlanco);
});
sRojo.addEventListener("mouseover", () => {
  addHoverSpider(sRojo);
});
sNegro.addEventListener("mouseover", () => {
  addHoverSpider(sNegro);
});
sRojo.addEventListener("mouseout", () => {
  removeHoverSpider(sRojo);
});
sBlanco.addEventListener("mouseout", () => {
  removeHoverSpider(sBlanco);
});
sNegro.addEventListener("mouseout", () => {
  removeHoverSpider(sNegro);
});
