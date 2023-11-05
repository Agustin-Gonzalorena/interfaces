let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

//atributos
let fichas = [];

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
imgFondo.onload = function () {
  clearCanvas();
};
//limpia el canvas
function clearCanvas() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(imgFondo, 0, 0, width, height);
}
//crear el tablero
function crearTablero(tipo) {
  const tamFicha = 25;
  let filas = 6;
  let columnas = 7;
  if (tipo == 5) {
    filas = 7;
    columnas = 8;
  } else if (tipo == 6) {
    filas = 8;
    columnas = 9;
  }
  let tablero = new Tablero2(
    ctx,
    width / 2 - columnas * tamFicha,
    height / 2 - height / 4,
    filas,
    columnas,
    imgFondoTablero,
    tamFicha
  );
  tablero.crear();
}
//crea y agrega las fichas al array
function agregarFichasRandom(num, tipo, img) {
  for (let i = 0; i < tamañoDeJuego / 2; i++) {
    let f = new Ficha2(
      ctx,
      Math.random() * 230 + num,
      height / 2 - 20 + (Math.random() * height - 20) / 2,
      25,
      img,
      tipo
    );
    fichas.push(f);
  }
}
function checkearJugadores(jugador1, jugador2) {
  //jugador 1
  if (jugador1 == "batman") {
    agregarFichasRandom(20, 1, imgFichaBatman);
  } else if (jugador1 == "superman") {
    agregarFichasRandom(20, 1, imgFichaSuperman);
  } else {
    agregarFichasRandom(20, 1, imgFichaMM);
  }
  //jugador 2
  if (jugador2 == "batman") {
    agregarFichasRandom(850, 2, imgFichaBatman);
  } else if (jugador2 == "superman") {
    agregarFichasRandom(850, 2, imgFichaSuperman);
  } else {
    agregarFichasRandom(850, 2, imgFichaMM);
  }
}
const startGame = (tipo, jugador1, jugador2) => {
  clearCanvas();
  crearTablero(tipo);
  checkearJugadores(jugador1, jugador2);
};
startGame(4, "batman", "superman");
