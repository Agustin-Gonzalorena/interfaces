class Tablero {
  m;
  filas;
  columnas;
  constructor(filas, columnas, ctx) {
    this.filas = filas;
    this.columnas = columnas;
    this.ctx = ctx;
    this.m = [];
  }

  crear() {
    for (let i = 0; i < this.filas; i++) {
      this.m[i] = [];
      for (let j = 0; j < this.columnas; j++) {
        let c1 = new Casillero(350 + j * 55, 200 + i * 55, this.ctx, 25);
        this.m[i][j] = c1;
      }
    }
  }

  draw() {
    let inicioX = this.m[0][0].getPosition()[0];
    let inicioY = this.m[0][0].getPosition()[1];
    let finX = this.m[this.filas - 1][this.columnas - 1].getPosition()[0];
    let finY = this.m[this.filas - 1][this.columnas - 1].getPosition()[1];
    let unCasillero =
      this.m[0][1].getPosition()[0] - this.m[0][0].getPosition()[0];
    console.log(this.m[this.filas - 1][this.columnas - 1].getPosition());
    console.log(this.m);
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)  ";
    this.ctx.strokeStyle = "rgba(0, 0, 0, 0.6)";
    this.ctx.lineWidth = 15;
    this.ctx.fillRect(
      inicioX - 25 - 10,
      inicioY - 25 - 10,
      finX - inicioX + 20 + unCasillero,
      finY - inicioY + 20 + unCasillero
    );
    this.ctx.strokeRect(
      //dibuja el rectangulo
      inicioX - 25 - 17,
      inicioY - 25 - 17,
      finX - inicioX + 34 + unCasillero,
      finY - inicioY + 34 + unCasillero
    );
    for (let i = 0; i < this.filas; i++) {
      for (let j = 0; j < this.columnas; j++) {
        let element = this.m[i][j];
        element.draw();
      }
    }
  }
}
