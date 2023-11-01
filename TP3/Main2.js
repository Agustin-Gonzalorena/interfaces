let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

//remplazar por imagen
ctx.fillStyle = "white";
ctx.fillRect(0, 0, width, height);

/* ctx.fillStyle = "grey";
ctx.fillRect(0, 0, 250, height);
ctx.fillRect(width - 250, 0, 250, height); */

function drawTablero(alto, ancho) {
  ctx.fillStyle = "blue";
  ctx.fillRect(width / 2 - ancho / 2, height / 2 - alto / 2, ancho, alto);
}
drawTablero(400, 500);

const tamañoDeJuego = 6 * 7;

function dibujarFichasRandom() {
  for (let i = 0; i < tamañoDeJuego / 2; i++) {
    let ficha = new Ficha(
      Math.random() * 230 + 20,
      height / 2 - 20 + (Math.random() * height - 20) / 2,
      "#242424",
      ctx,
      20
    );
    ficha.draw();
  }
}
dibujarFichasRandom();
function dibujarFichasRandom1() {
  for (let i = 0; i < tamañoDeJuego / 2; i++) {
    let ficha = new Ficha(
      Math.random() * 230 + 850,
      height / 2 - 20 + (Math.random() * height - 20) / 2,
      "red",
      ctx,
      20
    );
    ficha.draw();
  }
}
dibujarFichasRandom1();

//inicia el juego(img1,img2,queJuego4,5,6)
//dibujar tablero
//dibujar fichas segun tamaño del juego
//iniciar un temporizador
