"use strict";
import { BurgerMenu } from "./components/BurgerMenu/BurgerMenu.js"; /* 
import { CartMenu } from "./components/CartMenu/CartMenu.js";
import { UserMenu } from "./components/UserMenu/UserMenu.js"; */
import { apiCategories } from "./utils/apiCategories.js";
BurgerMenu();

document.querySelector("#categories").innerHTML = apiCategories
  .map((category) => {
    return `<li class="category"><img
    src=${category.img}
    alt=${category.name}
  /><p>${category.name}</p></li>`;
  })
  .join("");

let btnCart = document.querySelector(".cart");
let boxCart = document.querySelector(".box-cart");

let btnUser = document.querySelector(".btn-user");
let boxUser = document.querySelector(".box-user");

const changeCart = () => {
  if (window.innerWidth < 660) {
    /* location.href = "/cart.html"; */
    console.log("me fui al carrito");
  } else {
    if (boxUser.classList.contains("open")) {
      changeUser();
    }
    boxCart.classList.toggle("open");
  }
};

const changeUser = () => {
  if (boxCart.classList.contains("open")) {
    changeCart();
  }
  boxUser.classList.toggle("open");
};

btnUser.addEventListener("click", changeUser);
btnCart.addEventListener("click", changeCart);

document.querySelector(".btn-user-mobile").addEventListener("click", () => {
  console.log("me fui al perfil");
});
