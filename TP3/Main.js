import { startGame } from "./Juego.js";

let juegoSeleccionado = 4;
let jugador1 = null;
let jugador2 = null;
//botones elegir juego
let btn4L = document.querySelector("#btn4L");
let btn5L = document.querySelector("#btn5L");
let btn6L = document.querySelector("#btn6L");
//botones elegir ficha
let titlePlayer = document.querySelector("#titlePlayer");
/* titlePlayer.innerHTML = ""; */
let btnBatman = document.querySelector("#batmanP");
let btnSuperman = document.querySelector("#supermanP");
let btnMujerMaravilla = document.querySelector("#mujerMaravillaP");
let arrayBtnPlayer = [
  [btnBatman, "batman"],
  [btnSuperman, "superman"],
  [btnMujerMaravilla, "mujerMaravilla"],
];
const selecionarJuego = (juego, clase) => {
  juegoSeleccionado = juego;
  btn4L.classList.remove("selected");
  btn5L.classList.remove("selected");
  btn6L.classList.remove("selected");
  btn4L.removeAttribute("disabled");
  btn5L.removeAttribute("disabled");
  btn6L.removeAttribute("disabled");
  clase.classList.add("selected");
  clase.setAttribute("disabled", "true");
};

const volverASeleccionar = () => {
  jugador1 = null;
  jugador2 = null;
  titlePlayer.innerHTML = "Seleccionar jugador 1";
  arrayBtnPlayer.forEach((element) => {
    element[0].classList.add("imgSelectPlayer");
    element[0].classList.remove("playerSelec");
    element[0].removeAttribute("disabled");
    element[0].addEventListener("click", () => {
      selecionarJugador(element[1], element[0]);
    });
  });
};

const selecionarJugador = (seleccionado, clase) => {
  if (jugador1 == null) {
    jugador1 = seleccionado;
    clase.classList.add("playerSelec");
    titlePlayer.innerHTML = "Seleccionar jugador 2";
  } else if (jugador1 != seleccionado && jugador2 == null) {
    jugador2 = seleccionado;
    clase.classList.add("playerSelec");
    titlePlayer.innerHTML = `<button id="btnSeleccionar" class="btnGameSeleccion" >Volver a elegir</button>`;
    document
      .querySelector("#btnSeleccionar")
      .addEventListener("click", volverASeleccionar);
  }
  clase.classList.remove("imgSelectPlayer");

  //no dejar elegir otro jugador
  arrayBtnPlayer.forEach((element) => {
    if (jugador1 != null && jugador2 != null) {
      if (element[1] != jugador1 && element[1] != jugador2) {
        element[0].classList.remove("imgSelectPlayer");
        element[0].setAttribute("disabled", "true");
        element[0].removeEventListener("click", () => {
          selecionarJugador(element[1], element[0]);
        });
      }
    }
  });
};

// addEventListener
btnBatman.addEventListener("click", () => {
  selecionarJugador("batman", btnBatman);
});
btnSuperman.addEventListener("click", () => {
  selecionarJugador("superman", btnSuperman);
});
btnMujerMaravilla.addEventListener("click", () => {
  selecionarJugador("mujerMaravilla", btnMujerMaravilla);
});

btn4L.addEventListener("click", () => {
  selecionarJuego(4, btn4L);
});
btn5L.addEventListener("click", () => {
  selecionarJuego(5, btn5L);
});
btn6L.addEventListener("click", () => {
  selecionarJuego(6, btn6L);
});

btnJugar.addEventListener("click", () => {
  if (jugador1 == null || jugador2 == null) {
    document.querySelector(".errorGame").innerHTML =
      "Faltan seleccionar los jugadores";
    return;
  }
  document.querySelector(".errorGame").innerHTML = "";
  document.querySelector(".blurGame").classList.add("close");

  startGame(juegoSeleccionado, jugador1, jugador2);
});

export const finishGame = (num) => {
  let ganador;
  if (num == 1) {
    ganador = jugador1;
  } else if (num == 2) {
    ganador = jugador2;
  }
  document.querySelector(".blurGame").classList.add("close");
  let finishDiv = document.querySelector(".resultGame");

  finishDiv.classList.add("open");
  if (num == null) {
    document.querySelector("#titleResult").innerHTML = `Empate`;
    finishDiv.style.backgroundImage = "url(../asset/imgCanvas/ciudad.jpg)";
    return;
  }
  if (ganador === "batman") {
    finishDiv.style.backgroundImage = "url(../asset/imgCanvas/batmanWin.png)";
  } else if (ganador === "superman") {
    finishDiv.style.backgroundImage = "url(../asset/imgCanvas/supermanWin.jpg)";
  } else if (ganador === "mujerMaravilla") {
    finishDiv.style.backgroundImage =
      "url(../asset/imgCanvas/mujerMaravillaWin.jpg)";
  }
  document.querySelector("#titleResult").innerHTML = `Gano ${ganador}`;
};

document.querySelector("#resetGame").addEventListener("click", () => {
  document.querySelector(".blurGame").classList.remove("close");
  document.querySelector(".resultGame").classList.remove("open");
  document.querySelector(".resultGame").style.backgroundImage = "";
  volverASeleccionar();
});
