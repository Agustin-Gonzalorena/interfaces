"use strict";
import { apiGames } from "../utils/apiGames.js";

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
      await delay(50); // Esperar 50 ms antes de la siguiente iteración
    }
  }

  updateProgressBar().then(() => {
    document.querySelector(".loader").classList.toggle("close");
    document.querySelector(".main").classList.toggle("open");
  });
}
loading();

function scrollCarousel(cant) {
  const prevButtons = document.querySelectorAll(".carousel .prev");
  const nextButtons = document.querySelectorAll(".carousel .next");

  prevButtons.forEach((prevButton) => {
    prevButton.addEventListener("click", function () {
      const cardContainer = prevButton.nextElementSibling;
      cardContainer.scrollLeft -= cant;
      const cards = cardContainer.querySelectorAll(".card");
      cards.forEach((card) => {
        card.classList.add("moveLeft");
      });
      setTimeout(() => {
        cards.forEach((card) => {
          card.classList.remove("moveLeft");
        });
      }, 300);
    });
  });

  nextButtons.forEach((nextButton) => {
    nextButton.addEventListener("click", function () {
      const cardContainer = nextButton.previousElementSibling;
      cardContainer.scrollLeft += cant;
      const cards = cardContainer.querySelectorAll(".card");
      cards.forEach((card) => {
        card.classList.add("moveRight");
      });
      setTimeout(() => {
        cards.forEach((card) => {
          card.classList.remove("moveRight");
        });
      }, 300);
    });
  });
}
scrollCarousel(600);

const card = (g, tipoEtiqueta, contenidoEtiqueta) => {
  return `<div class="card" title=${g.name}>
      <div class="etiqueta ${tipoEtiqueta}">${contenidoEtiqueta}</div>
      <div class="card-img" title="${g.name}">
        <img
          src="${g.img}"
          alt="Imagen destacada"
        />
      </div>
    <div class="card-text">
      <h3>${g.name}</h3>
      </div>
    </div>`;
};
document.querySelector("#offert").innerHTML = apiGames
  .filter((g) => {
    return g.discount == true;
  })
  .sort((a, b) => {
    return a.name.localeCompare(b.name);
  })
  .map((g) => {
    let tipoEtiqueta;
    let contenidoEtiqueta = "hola";
    if (g.discount == true) {
      tipoEtiqueta = "enOferta";
      contenidoEtiqueta = `<div class="box-etiqueta-oferta">
                            <p class="price">$${g.price}</p>
                            <p class="priceOffert">$${g.price * 0.8}</p>
                          </div>
                          <div class="addCart"></div>
                          `;
    } else if (g.price == 0) {
      tipoEtiqueta = "gratis";
      contenidoEtiqueta = "Gratis";
    } else {
      tipoEtiqueta = "normal";
      contenidoEtiqueta = `$${g.price} <div class="addCart"></div>`;
    }
    return card(g, tipoEtiqueta, contenidoEtiqueta);
  })
  .join("");

document.querySelector("#adventure").innerHTML = apiGames
  .filter((g) => {
    return g.category_id == 3;
  })
  .map((g) => {
    let tipoEtiqueta;
    let contenidoEtiqueta = "hola";
    if (g.discount == true) {
      tipoEtiqueta = "enOferta";
      contenidoEtiqueta = `<div class="box-etiqueta-oferta">
                            <p class="price">$${g.price}</p>
                            <p class="priceOffert">$${g.price * 0.8}</p>
                          </div>
                          <div class="addCart"></div>
                          `;
    } else if (g.price == 0) {
      tipoEtiqueta = "gratis";
      contenidoEtiqueta = "Gratis";
    } else {
      tipoEtiqueta = "normal";
      contenidoEtiqueta = `$${g.price} <div class="addCart"></div>`;
    }
    return card(g, tipoEtiqueta, contenidoEtiqueta);
  })
  .join("");

document.querySelector("#racing").innerHTML = apiGames
  .filter((g) => {
    return g.category_id == 4;
  })
  .map((g) => {
    let tipoEtiqueta;
    let contenidoEtiqueta = "hola";
    if (g.discount == true) {
      tipoEtiqueta = "enOferta";
      contenidoEtiqueta = `<div class="box-etiqueta-oferta">
                            <p class="price">$${g.price}</p>
                            <p class="priceOffert">$${g.price * 0.8}</p>
                          </div>
                          <div class="addCart"></div>
                          `;
    } else if (g.price == 0) {
      tipoEtiqueta = "gratis";
      contenidoEtiqueta = "Gratis";
    } else {
      tipoEtiqueta = "normal";
      contenidoEtiqueta = `$${g.price} <div class="addCart"></div>`;
    }
    return card(g, tipoEtiqueta, contenidoEtiqueta);
  })
  .join("");

let btnsAddCart = document.querySelectorAll(".addCart");
btnsAddCart.forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.classList.toggle("open");
  });
});
