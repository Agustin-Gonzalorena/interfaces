let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

//atributos
let filas = 8;
let columnas = 9;
let tamañoDeJuego = filas * columnas;
let fichas = [];
let previusFicha = null;
let lastClickedFigure = null;
let isMouseDown = false;
let tamFicha = 30;

//dibujar canvas
ctx.fillStyle = "white";
ctx.fillRect(0, 0, width, height);

let img = new Image();
const imgFondo = new Image();
imgFondo.src = "../asset/img/cocaPublicidad.png";

//creo el tablero
let t = new Tablero(
  filas,
  columnas,
  ctx,
  canvas.width / 2 - columnas * 25,
  canvas.height / 2 - canvas.height / 4,
  img
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
  t.draw(img);
  for (let i = 0; i < fichas.length; i++) {
    fichas[i].draw();
  }
}

agregarFichasRandom(850, 1, "red");
agregarFichasRandom(20, 2, "black");
drawAll();

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
    clickFicha.setResaltado(true);
    lastClickedFigure = clickFicha;
  }
  previusFicha = lastClickedFigure;
  drawAll();
}
function colocarFicha(columna) {
  console.log("columna", columna);
  let ultimaPosicion = t.agregarFicha(previusFicha, columna);
  if (ultimaPosicion != null) {
    previusFicha.setPosition(ultimaPosicion[0], ultimaPosicion[1]);
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
  console.log("solte");
  console.log(t.m[0][1].getPosition()[0]);
  console.log(t.m[0][0].getPosition()[0]);
  console.log(t.m[0][1].getPosition()[0] - t.m[0][0].getPosition()[0]);
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
