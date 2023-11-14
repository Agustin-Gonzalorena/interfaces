import {
  PopUpBlanco,
  PopUpNegro,
  PopUpRojo,
} from "./Components/PopUp/PopUp.js";

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
//comportamiento section 6
document.addEventListener("scroll", () => {
  function clean() {
    document.querySelectorAll(".imgS6").forEach((s) => {
      s.classList.remove("showImgS6");
    });
    document.querySelectorAll(".textosS6").forEach((s) => {
      s.classList.remove("showTextoS6");
    });
  }
  if (window.scrollY < 4080) {
    clean();
    document.querySelector("#imgS6-1").classList.add("showImgS6");
    document.querySelector("#textS6-1").classList.add("showTextoS6");
  }
  if (window.scrollY > 4080 && window.screenY < 4450) {
    clean();
    document.querySelector("#imgS6-2").classList.add("showImgS6");
    document.querySelector("#textS6-2").classList.add("showTextoS6");
  }
  if (window.scrollY > 4450 && window.screenY < 4950) {
    clean();
    document.querySelector("#imgS6-3").classList.add("showImgS6");
    document.querySelector("#textS6-3").classList.add("showTextoS6");
  }
  if (window.scrollY > 4950) {
    clean();
    document.querySelector("#imgS6-4").classList.add("showImgS6");
    document.querySelector("#textS6-4").classList.add("showTextoS6");
  }
});
//conportamiento section 8

const sBlanco = document.querySelector(".boxSpiderBlanco");
const sNegro = document.querySelector(".boxSpiderBlack");
const sRojo = document.querySelector(".boxSpiderNormal");
const boxBlur = document.querySelector(".boxBlur");
const fondoBlanco = document.querySelector(".hoverSpiderBlanco");
const fondoNegro = document.querySelector(".hoverSpiderBlack");
const fondoRojo = document.querySelector(".hoverSpiderNormal");

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
      fondoBlanco.classList.add("openFondoS8");
      break;
    case sRojo:
      fondoRojo.classList.add("openFondoS8");
      break;
    case sNegro:
      fondoNegro.classList.add("openFondoS8");
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
      fondoBlanco.classList.remove("openFondoS8");
      break;
    case sRojo:
      fondoRojo.classList.remove("openFondoS8");
      break;
    case sNegro:
      fondoNegro.classList.remove("openFondoS8");
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

//popUp

const btnCerrar = document.querySelector(".closePopUp");
btnCerrar.addEventListener("click", () => {
  document.querySelector(".popUp").classList.remove("open");
});

sRojo.addEventListener("click", () => {
  document.querySelector(".popUp").classList.add("open");
  PopUpRojo();
});
sBlanco.addEventListener("click", () => {
  document.querySelector(".popUp").classList.add("open");
  PopUpBlanco();
});
sNegro.addEventListener("click", () => {
  document.querySelector(".popUp").classList.add("open");
  PopUpNegro();
});
