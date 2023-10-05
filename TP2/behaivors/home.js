"use strict";

function loading() {
  let count = document.querySelector(".count");

  //Función que retorna una promesa que se resuelve después de un tiempo
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Espera a que todas las llamadas a setTimeout se completen
  async function updateProgressBar() {
    for (let i = 0; i <= 100; i++) {
      count.innerHTML = `<p>Cargando... %${i}</p>`;
      await delay(5); // Esperar 50 ms antes de la siguiente iteración
    }
  }

  updateProgressBar().then(() => {
    document.querySelector(".loader").classList.toggle("close");
    document.querySelector(".main").classList.toggle("open");
  });
}
loading();
