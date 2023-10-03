export const burgerMenu = () => {
  //Desplegar menu hamburguesa
  let cont = 0;
  let btnBurger = document.querySelector("#btnBurger");
  let linea1 = document.querySelector("#bLine1");
  let linea3 = document.querySelector("#bLine3");

  let burgerDesplegableOff = document.querySelector(".burgerDesplegableOff");
  btnBurger.addEventListener("click", () => {
    //cambiar icono burger
    btnBurger.classList.toggle("acti");
    linea1.classList.toggle("acti");
    linea3.classList.toggle("acti");

    //despliegue
    burgerDesplegableOff.classList.replace(
      "burgerDesplegableOff",
      "burgerDesplegable"
    );
    cont++;
    if (cont > 1)
      document.querySelector(".burgerDesplegable").classList.toggle("hide");
  });
};
