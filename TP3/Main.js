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
let previusFicha = null;
let lastClickedFigure = null;
let isMouseDown = false;
let tamFicha = 30;
let turno = 1;

//dibujar canvas
ctx.fillStyle = "white";
ctx.fillRect(0, 0, width, height);

const imgFondoTablero = new Image();
imgFondoTablero.src = "../asset/imgCanvas/humo.png";
const imgFondo = new Image();
imgFondo.src = "../asset/imgCanvas/ciudad.jpg";

window.onload = function () {
  drawAll();
};

//creo el tablero
let t = new Tablero(
  filas,
  columnas,
  ctx,
  canvas.width / 2 - columnas * 25,
  canvas.height / 2 - canvas.height / 4,
  imgFondoTablero
);
t.crear();

//limpia el canvas
function clearCanvas() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(imgFondo, 0, 0, width, height);
}
//dibuja todo
function drawAll() {
  clearCanvas();
  t.draw();
  for (let i = 0; i < fichas.length; i++) {
    fichas[i].draw();
  }
  console.log("turno de:", turno);
}
agregarFichasRandom(20, 1, "black");
agregarFichasRandom(850, 2, "red");

//crea y agrega las fichas al array
function agregarFichasRandom(num, tipo, color) {
  for (let i = 0; i < tamañoDeJuego / 2; i++) {
    let f = new Ficha(
      Math.random() * 230 + num,
      height / 2 - 20 + (Math.random() * height - 20) / 2,
      25,
      color,
      ctx,
      tipo
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
  drawAll();
}
const checkearHorizontal = (fila, columna, tipo) => {
  let contador = 0;
  for (let i = 0; i < columnas; i++) {
    if (t.m[fila][i].tipo == tipo) {
      contador++;
      if (contador == tipoJuego) {
        return true;
      }
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
    }
    i++;
    j--;
  }
  return false;
};
const checkearGanador = (fila, columna) => {
  let f = t.m[fila][columna];
  for (let i = 0; i < tipoJuego; i++) {
    if (checkearHorizontal(fila, columna, i)) {
      console.log("ganaste horizontal");
      return;
    }
    if (checkearVertical(fila, columna, i)) {
      console.log("ganaste vertical");
      return;
    }
    if (checkearDiagonal(fila, columna, i)) {
      console.log("ganaste diagonal");
      return;
    }
  }
};
function colocarFicha(columna) {
  console.log("columna", columna);
  let ultimaPosicion = t.agregarFicha(previusFicha, columna);
  if (ultimaPosicion[0] != null) {
    previusFicha.setPosition(ultimaPosicion[0][0], ultimaPosicion[0][1]);
    turno = turno == 1 ? 2 : 1;
    checkearGanador(ultimaPosicion[1], ultimaPosicion[2]);
    previusFicha.setResaltado(false);
    drawAll();
  } else {
    previusFicha.setPosition(
      previusFicha.posIncial[0],
      previusFicha.posIncial[1]
    );
    drawAll();
  }
}
let array = [columnas];

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
  drawAll();
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
    drawAll();
  }
}

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
  drawAll();
});
