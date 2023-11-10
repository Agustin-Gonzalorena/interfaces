let loading = true;

const divLoading = document.querySelector(".layerLoading");

setTimeout(() => {
  loading = false;
  divLoading.classList.add("close");
}, 5000);

function loadingTimer() {
  let count = document.querySelector("#porcentaje");

  //Función que retorna una promesa que se resuelve después de un tiempo
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Espera a que todas las llamadas a setTimeout se completen
  async function updateProgressBar() {
    for (let i = 0; i <= 100; i++) {
      count.innerHTML = `<strong> %${i}</strong>`;
      await delay(50); // Esperar 50 ms antes de la siguiente iteración
    }
  }

  updateProgressBar().then(() => {});
}
loadingTimer();
