let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

let tamañoDeJuego = 6 * 7;
let fichas = [];
let lastClickedFigure = null;
let isMouseDown = false;

//atibutos
let tamFicha = 30;

//dibujar canvas
ctx.fillStyle = "white";
ctx.fillRect(0, 0, width, height);

function clearCanvas() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);
}

//dibujar tablero
let c1 = new Casillero(100, 100, "black", ctx, tamFicha);

function agregarFichasRandom(num, tipo, color) {
  for (let i = 0; i < tamañoDeJuego / 2; i++) {
    let ficha = new Ficha(
      Math.random() * 230 + num,
      height / 2 - 20 + (Math.random() * height - 20) / 2,
      20,
      color,
      ctx,
      tipo
    );
    fichas.push(ficha);
  }
}
agregarFichasRandom(850, 1, "red");
agregarFichasRandom(20, 2, "black");

function drawFigure() {
  clearCanvas();
  for (let i = 0; i < fichas.length; i++) {
    fichas[i].draw();
  }
  c1.draw();
}

drawFigure();
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
  drawFigure();
  console.log(lastClickedFigure);
}

function onMouseUp(e) {
  isMouseDown = false;
  console.log("solte");
}

function onMouseMove(e) {
  if (isMouseDown && lastClickedFigure != null) {
    lastClickedFigure.setPosition(e.layerX, e.layerY);
    drawFigure();
  }
}
function findClickedFicha(x, y) {
  for (let i = 0; i < fichas.length; i++) {
    const element = fichas[i];
    if (element.isPointInside(x, y)) {
      return element;
    }
  }
  return null;
}

canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mousemove", onMouseMove);
