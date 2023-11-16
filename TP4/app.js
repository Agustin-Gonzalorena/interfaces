import {
  PopUpBlanco,
  PopUpNegro,
  PopUpRojo,
} from "./Components/PopUp/PopUp.js";

const btnBurger = document.querySelector(".burgerBtn");
btnBurger.addEventListener("mouseover", () => {
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

//comportamiento section 1
const eI = document.querySelector(".edificioIzq");
const eD = document.querySelector(".edificioDer");
const eC = document.querySelector(".edificioCen");
const sB = document.querySelector(".spiderWhite");
const sR = document.querySelector(".spiderNormal");
const sN = document.querySelector(".spiderBlack");
const tD = document.querySelector(".telaDer");
const tI = document.querySelector(".telaIzq");
const componentsS1 = [eI, eD, eC, sB, sR, sN, tD, tI, logo];
//cuando termina el loading
export const cargar = () => {
  componentsS1.forEach((c) => {
    c.classList.remove("close");
  });
};
/* setTimeout(cargar, 2000); */
//paralax
document.addEventListener("scroll", () => {
  const componentsS1 = [eI, eD, eC, sB, sR, sN, tD, tI, logo];
  componentsS1.forEach((c) => {
    c.style.transition = "none";
  });
  eI.style.transform = `translateX(${-window.scrollY * 0.2}px)`;
  eD.style.transform = `translateX(${window.scrollY * 0.2}px)`;
  eC.style.transform = `scale(${1 + window.scrollY * 0.0005})`;

  sB.style.transform = `translateY(${-window.scrollY * 0.5}px) translateX(${
    -window.scrollY * 0.5
  }px)`;

  sN.style.transform = `translateY(${-window.scrollY * 0.5}px) translateX(${
    window.scrollY * 0.5
  }px)`;
  tD.style.transform = `translateY(${-window.scrollY * 0.5}px) translateX(${
    window.scrollY * 0.5
  }px) rotate(114.597deg)`;

  sR.style.transform = `translateY(${-window.scrollY * 0.8}px)`;
  tI.style.transform = `translateY(${
    -window.scrollY * 0.8
  }px) rotate(65.403deg)`;
});
//comportamiento section 2
const duendeVerde = document.querySelector(".duendeVerde");
window.addEventListener("scroll", function () {
  const pos = duendeVerde.getBoundingClientRect(); //devuelve la posicion
  const desplazamiento = window.scrollY;
  if (pos.top < window.innerHeight && pos.bottom > 0) {
    duendeVerde.style.transform = `translateY(${
      (desplazamiento - pos.top) * 0.027
    }px)`;
  }
});
//comportamiento section 3
document.addEventListener("scroll", () => {
  if (window.scrollY > 1400) {
    document.querySelector("#cardP1").classList.add("cardAnim");
    document.querySelector("#cardP2").classList.add("cardAnim");
    document.querySelector("#cardP3").classList.add("cardAnim");
  }
});

//comportamiento section 4
const section4 = document.querySelector(".section4");
const c1 = document.querySelector("#ghosSpiderCard1");
const c2 = document.querySelector("#ghosSpiderCard2");
const c3 = document.querySelector("#ghosSpiderCard3");
window.addEventListener("scroll", function () {
  const pos = section4.getBoundingClientRect(); //devuelve la posicion
  const desplazamiento = window.scrollY;
  if (pos.top < window.innerHeight && pos.bottom > 0) {
    c1.style.transform = `translateY(${
      (desplazamiento - pos.top) * 0.027
    }px) rotate(-13.078deg)`;
    c2.style.transform = `translateY(${
      (desplazamiento - pos.top) * 0.027
    }px) rotate(-26.474deg)`;
    c3.style.transform = `translateY(${
      (desplazamiento - pos.top) * 0.007
    }px) rotate(-36.016deg)`;
  }
});
//comportamiento section 5
const section5 = document.querySelector(".boxParalax");
const pantera = document.querySelector(".panteraNegra");
const flacucho = document.querySelector(".flacucho");
const hulk = document.querySelector(".hulk");
const hojitas = document.querySelector(".hojitas");
const bosque = document.querySelector(".fondoS5-2");
section5.addEventListener("mousemove", (e) => {
  let posX = e.clientX;
  let posY = e.clientY;
  pantera.style.transform = `translateX(${-posX * 0.05}px) translateY(${
    posY * 0.05
  }px) `;
  flacucho.style.transform = `translateX(${20 + posX * 0.02}px) translateY(${
    posY * 0.02
  }px) `;
  hulk.style.transform = `translateX(${-posX * 0.02}px) translateY(${
    -20 + posY * 0.02
  }px) `;
  hojitas.style.transform = `scale(${1 + posY * 0.00002})`;
  bosque.style.transform = `translateX(${-posX * 0.005}px) scale(${
    1 + posY * 0.00002
  })`;
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

//comportamiento popUp
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
