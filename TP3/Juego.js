import { finishGame, resetGame } from "./Main.js";
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

//atributos
let tipoJuego = 4;
let filas = 6;
let columnas = 7;
let tamañoDeJuego = filas * columnas;
let fichas = [];
let fichasJugadas = 0;
let previusFicha = null;
let lastClickedFigure = null;
let isMouseDown = false;
let turno = 1;
let tiempo = 1800;
let tiempoRestante = tiempo;
let intervalo;
let t;
let minutos = Math.floor(tiempo / 60);
let segundos = tiempo % 60;
let tiempoFormateado = minutos + ":" + (segundos < 10 ? "0" : "") + segundos;
tiempoRestante = tiempoFormateado;
//dibujar canvas
ctx.fillStyle = "white";
ctx.fillRect(0, 0, width, height);

//imagenes
const imgFondoTablero = new Image();
imgFondoTablero.src = "../asset/imgCanvas/humo.png";
const imgFondo = new Image();
imgFondo.src = "../asset/imgCanvas/ciudad.jpg";
const imgFichaBatman = new Image();
imgFichaBatman.src = "../asset/img/icons/fichaBatman.png";
const imgFichaSuperman = new Image();
imgFichaSuperman.src = "../asset/img/icons/fichaSuperman.png";
const imgFichaMM = new Image();
imgFichaMM.src = "../asset/img/icons/FichaMM3.png";

window.onload = function () {
  clearCanvas();
};

//__________________dibuja todo_______________________
function drawAll(t) {
  clearCanvas();
  t.draw();
  for (let i = 0; i < fichas.length; i++) {
    fichas[i].draw();
  }
  ctx.font = "italic 30px Arial";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("Turno jugador: " + turno, 10, 50);
  ctx.fillText(tiempoFormateado, width - 100, 50);
  btnReiniciar().draw();
}

export const startGame = (juegoSeleccionado, jugador1, jugador2) => {
  intervalo = setInterval(actualizarCuentaRegresiva, 1000);
  checkearTipoJuego(juegoSeleccionado);
  if (jugador1 == "batman") {
    agregarFichasRandom(20, 1, "black", imgFichaBatman);
  } else if (jugador1 == "superman") {
    agregarFichasRandom(20, 1, "black", imgFichaSuperman);
  } else {
    agregarFichasRandom(20, 1, "black", imgFichaMM);
  }
  if (jugador2 == "batman") {
    agregarFichasRandom(850, 2, "red", imgFichaBatman);
  } else if (jugador2 == "superman") {
    agregarFichasRandom(850, 2, "red", imgFichaSuperman);
  } else {
    agregarFichasRandom(850, 2, "red", imgFichaMM);
  }
  t = crearTablero();

  drawAll(t);
};
//auxiliares
const checkearTipoJuego = (juegoSeleccionado) => {
  if (juegoSeleccionado == 4) {
    tipoJuego = 4;
    filas = 6;
    columnas = 7;
    tamañoDeJuego = filas * columnas;
  } else if (juegoSeleccionado == 5) {
    tipoJuego = 5;
    filas = 7;
    columnas = 8;
    tamañoDeJuego = filas * columnas;
  } else if (juegoSeleccionado == 6) {
    tipoJuego = 6;
    filas = 8;
    columnas = 9;
    tamañoDeJuego = filas * columnas;
  }
};

//creo el tablero
function crearTablero() {
  let t = new Tablero(
    filas,
    columnas,
    ctx,
    canvas.width / 2 - columnas * 25,
    canvas.height / 2 - canvas.height / 4,
    imgFondoTablero
  );
  t.crear();
  return t;
}

//limpia el canvas
function clearCanvas() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(imgFondo, 0, 0, width, height);
}

function reiniciarJuego() {
  tipoJuego = 4;
  filas = 6;
  columnas = 7;
  tamañoDeJuego = filas * columnas;
  fichas = [];
  fichasJugadas = 0;
  previusFicha = null;
  lastClickedFigure = null;
  isMouseDown = false;
  turno = 1;
  tiempo = 1800;
  tiempoRestante = tiempo;
  intervalo;
  clearInterval(intervalo);
}

function actualizarCuentaRegresiva() {
  minutos = Math.floor(tiempo / 60);
  segundos = tiempo % 60;
  tiempoFormateado = minutos + ":" + (segundos < 10 ? "0" : "") + segundos;
  tiempoRestante = tiempoFormateado;

  if (tiempo === 0) {
    clearInterval(intervalo);
    finishGame(null);
    reiniciarJuego();
  } else {
    tiempo--;
    drawAll(t);
  }
}
//crea y agrega las fichas al array
function agregarFichasRandom(num, tipo, color, img) {
  for (let i = 0; i < tamañoDeJuego / 2; i++) {
    let f = new Ficha(
      Math.random() * 230 + num,
      height / 2 - 20 + (Math.random() * height - 20) / 2,
      25,
      color,
      ctx,
      tipo,
      img
    );
    fichas.push(f);
  }
}

//checkea si la ficha esta clickeada
function findClickedFicha(x, y) {
  for (let i = 0; i < fichas.length; i++) {
    const element = fichas[i];
    if (element.isPointInside(x, y)) {
      return element;
    }
  }
  return null;
}

function onMouseDown(e) {
  isMouseDown = true;
  if (lastClickedFigure != null) {
    lastClickedFigure.setResaltado(false);
    lastClickedFigure = null;
  }
  let clickFicha = findClickedFicha(e.layerX, e.layerY);
  if (clickFicha != null) {
    if (!clickFicha.getMove()) {
      return;
    }
    if (clickFicha.tipo != turno) {
      return;
    }
    clickFicha.setResaltado(true);
    lastClickedFigure = clickFicha;
  }
  previusFicha = lastClickedFigure;
  drawAll(t);
}
const checkearHorizontal = (fila, columna, tipo) => {
  let contador = 0;
  for (let i = 0; i < columnas; i++) {
    if (t.m[fila][i].tipo == tipo) {
      contador++;
      if (contador == tipoJuego) {
        return true;
      }
    } else {
      contador = 0;
    }
  }
  return false;
};
const checkearVertical = (fila, columna, tipo) => {
  let contador = 0;
  for (let i = 0; i < filas; i++) {
    if (t.m[i][columna].tipo == tipo) {
      contador++;
      if (contador == tipoJuego) {
        return true;
      }
    } else {
      contador = 0;
    }
  }
  return false;
};
const checkearDiagonal = (fila, columna, tipo) => {
  let contador = 0;
  let i = fila;
  let j = columna;
  while (i < filas && j < columnas) {
    if (t.m[i][j].tipo == tipo) {
      contador++;
      if (contador == tipoJuego) {
        return true;
      }
    } else {
      contador = 0;
    }
    i++;
    j++;
  }
  contador = 0;
  i = fila;
  j = columna;
  while (i >= 0 && j >= 0) {
    if (t.m[i][j].tipo == tipo) {
      contador++;
      if (contador == tipoJuego) {
        return true;
      }
    } else {
      contador = 0;
    }
    i--;
    j--;
  }
  contador = 0;
  i = fila;
  j = columna;
  while (i >= 0 && j < columnas) {
    if (t.m[i][j].tipo == tipo) {
      contador++;
      if (contador == tipoJuego) {
        return true;
      }
    } else {
      contador = 0;
    }
    i--;
    j++;
  }
  contador = 0;
  i = fila;
  j = columna;
  while (i < filas && j >= 0) {
    if (t.m[i][j].tipo == tipo) {
      contador++;
      if (contador == tipoJuego) {
        return true;
      }
    } else {
      contador = 0;
    }
    i++;
    j--;
  }
  return false;
};
const verificarDiagonalDerecha = (fila, columna, tipo) => {
  let contador = 0;
  while (fila > 0 && columna > 0) {
    fila--;
    columna--;
  }
  while (fila < filas && columna < columnas) {
    if (t.m[fila][columna].tipo == tipo) {
      contador++;
      if (contador == tipoJuego) {
        return true;
      }
    } else {
      contador = 0;
    }
    fila++;
    columna++;
  }

  return false;
};
const verificarDiagonalIzquierda = (fila, columna, tipo) => {
  let contador = 0;
  while (fila > 0 && columna < columnas - 1) {
    fila--;
    columna++;
    console.log(fila, columna);
  }
  while (fila < filas && columna >= 0) {
    console.log("hola");
    if (t.m[fila][columna].tipo == tipo) {
      contador++;
      if (contador == tipoJuego) {
        return true;
      }
    } else {
      contador = 0;
    }
    fila++;
    columna--;
  }

  return false;
};
const checkearGanador = (fila, columna) => {
  fichasJugadas++;
  let ganador = turno;
  ganador = turno == 1 ? 2 : 1;
  for (let i = 0; i < tipoJuego; i++) {
    if (checkearHorizontal(fila, columna, i)) {
      finishGame(ganador);
      reiniciarJuego();
      return;
    }
    if (checkearVertical(fila, columna, i)) {
      finishGame(ganador);
      reiniciarJuego();
      return;
    }
    /* if (checkearDiagonal(fila, columna, i)) {
      finishGame(ganador);
      reiniciarJuego();
      return;
    } */
    if (verificarDiagonalDerecha(fila, columna, i)) {
      finishGame(ganador);
      reiniciarJuego();
      return;
    }
    if (verificarDiagonalIzquierda(fila, columna, i)) {
      finishGame(ganador);
      reiniciarJuego();
      return;
    }
  }
  if (fichasJugadas == tamañoDeJuego) {
    ganador = null;
    finishGame(ganador);
    reiniciarJuego();
  }
};
function colocarFicha(columna) {
  let ultimaPosicion = t.agregarFicha(previusFicha, columna);
  if (ultimaPosicion != null && ultimaPosicion[0] != null) {
    previusFicha.setPosition(ultimaPosicion[0][0], ultimaPosicion[0][1]);
    turno = turno == 1 ? 2 : 1;
    checkearGanador(ultimaPosicion[1], ultimaPosicion[2]);
    drawAll(t);
  } else {
    previusFicha.setPosition(
      previusFicha.posIncial[0],
      previusFicha.posIncial[1]
    );
    drawAll(t);
  }
}

//checkea el casillero en el que esta la ficha
function checkearSiEstaEnCasillero(tamFicha) {
  let posInicial = t.m[0][0].getPosition()[0];
  let posIncialY = t.m[0][0].getPosition()[1];
  let posFicha = previusFicha.getPosition();
  let array = [columnas];
  for (let i = 0; i < columnas; i++) {
    array[i] = posInicial + tamFicha * i;
    if (
      posFicha[0] + 26 > array[i] &&
      posFicha[0] + 26 < array[i] + tamFicha &&
      posFicha[1] < posIncialY - 20
    ) {
      colocarFicha(i);
      return;
    }
  }
  previusFicha.setPosition(
    previusFicha.posIncial[0],
    previusFicha.posIncial[1]
  );
  drawAll(t);
}
function onMouseUp(e) {
  isMouseDown = false;
  if (lastClickedFigure == null) {
    return;
  }
  let tamFicha = t.m[0][1].getPosition()[0] - t.m[0][0].getPosition()[0];
  checkearSiEstaEnCasillero(tamFicha);
}

function onMouseMove(e) {
  if (isMouseDown && lastClickedFigure != null) {
    lastClickedFigure.setPosition(e.layerX, e.layerY);
    drawAll(t);
  }
}

const btnReiniciar = () => ({
  posX: width - 230,
  posY: 25,
  width: 100,
  height: 30,
  draw() {
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)  ";
    ctx.fillRect(this.posX, this.posY, 100, 30);
    ctx.font = "italic 20px Arial";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Reiniciar", this.posX + 10, this.posY + this.height - 6);
  },
  isPointInside(x, y) {
    return !(
      x <= this.posX ||
      x > this.posX + this.width ||
      y <= this.posY ||
      y > this.posY + this.height
    );
  },
});
canvas.addEventListener("click", (e) => {
  let btn = btnReiniciar();
  if (btn.isPointInside(e.layerX, e.layerY)) {
    resetGame();
    reiniciarJuego();
  } else {
    return;
  }
});
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mouseleave", () => {
  isMouseDown = false;
  if (lastClickedFigure != null) {
    lastClickedFigure.setResaltado(false);
    lastClickedFigure = null;
    if (!previusFicha.getMove()) {
      return;
    }
    previusFicha.setPosition(
      previusFicha.posIncial[0],
      previusFicha.posIncial[1]
    );
  }
  drawAll(t);
});
