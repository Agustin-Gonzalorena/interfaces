"use strict";
import { apiCategories } from "./utils/apiCategories.js";

//Render de categoriass
document.querySelector("#categories").innerHTML = apiCategories
  .map((category) => {
    return `<li class="category"><img
    src=${category.img}
    alt=${category.name}
  /><p>${category.name}</p></li>`;
  })
  .join("");

// Comportamiento de los botones de usuario y carrito
let btnCart = document.querySelector(".cart");
let boxCart = document.querySelector(".box-cart");
let btnUser = document.querySelector(".btn-user");
let boxUser = document.querySelector(".box-user");
let clickOut = document.querySelector(".click-out");

const changeCart = () => {
  if (window.innerWidth < 660) {
    /* location.href = "/cart.html"; */
    console.log("me fui al carrito");
  } else {
    if (boxUser.classList.contains("open")) {
      changeUser();
      setTimeout(() => {
        boxCart.classList.toggle("open");
      }, 200);
      clickOut.classList.toggle("open");
    } else {
      boxCart.classList.toggle("open");
      clickOut.classList.toggle("open");
    }
  }
};
const changeUser = () => {
  if (boxCart.classList.contains("open")) {
    changeCart();
    setTimeout(() => {
      boxUser.classList.toggle("open");
    }, 200);
    clickOut.classList.toggle("open");
  } else {
    boxUser.classList.toggle("open");
    clickOut.classList.toggle("open");
  }
};
btnUser.addEventListener("click", changeUser);
btnCart.addEventListener("click", changeCart);
clickOut.addEventListener("click", () => {
  if (boxUser.classList.contains("open")) {
    changeUser();
  } else if (boxCart.classList.contains("open")) {
    changeCart();
  } else clickOut.classList.toggle("open");
});

document.querySelector(".btn-user-mobile").addEventListener("click", () => {
  console.log("me fui al perfil");
});

//comportamiento menu hambuerguesa
let btnBurger = document.querySelector("#btnBurger");
let boxCategories = document.querySelector(".box-categories");
btnBurger.addEventListener("click", () => {
  boxCategories.classList.toggle("open");
  btnBurger.classList.toggle("open");
});
