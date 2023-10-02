"use strict";
//Desplegar menu hamburguesa
let cont = 0;
let btnBurger = document.querySelector("#btnBurger");
let burgerDesplegableOff = document.querySelector(".burgerDesplegableOff");
btnBurger.addEventListener("click", () => {
  //cambiar icono burger
  btnBurger.classList.toggle("acti");
  //despliegue
  burgerDesplegableOff.classList.replace(
    "burgerDesplegableOff",
    "burgerDesplegable"
  );
  cont++;
  if (cont > 1)
    document.querySelector(".burgerDesplegable").classList.toggle("hide");
});
