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
scrollCarousel(400);

document.querySelector("#adventure").innerHTML = apiGames
  .filter((g) => {
    return g.category_id == 3;
  })
  .map((g) => {
    return `
    <div class="card">
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
  })
  .join("");

document.querySelector("#rancing").innerHTML = apiGames
  .filter((g) => {
    return g.category_id == 4;
  })
  .map((g) => {
    return `
    <div class="card">
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
  })
  .join("");

document.querySelector("#offert").innerHTML = apiGames
  .filter((g) => {
    return g.discount == true;
  })
  .sort((a, b) => {
    return a.name.localeCompare(b.name);
  })
  .map((g) => {
    return `
    <div class="card">
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
  })
  .join("");
