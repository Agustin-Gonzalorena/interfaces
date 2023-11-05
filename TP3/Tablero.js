class Tablero {
  constructor(filas, columnas, ctx, posX, posY, img) {
    this.filas = filas;
    this.columnas = columnas;
    this.ctx = ctx;
    this.m = [];
    this.posX = posX;
    this.posY = posY;
    this.img = img;
  }

  crear() {
    for (let i = 0; i < this.filas; i++) {
      this.m[i] = [];
      for (let j = 0; j < this.columnas; j++) {
        let c1 = new Casillero(
          this.posX + j * 50,
          this.posY + i * 50,
          this.ctx,
          25
        );
        this.m[i][j] = c1;
      }
    }
  }
  getFicha(fila, columna) {
    return this.m[fila][columna];
  }

  agregarFicha(ficha, columna) {
    let fila = this.filas - 1;
    while (fila >= 0) {
      if (this.m[fila][columna].getElemento() == "casillero") {
        let ultimaPosicion = this.m[fila][columna].getPosition();
        this.m[fila][columna] = ficha;
        ficha.setMove(false);
        return [ultimaPosicion, fila, columna];
      }
      fila--;
    }
    return null;
  }
  reiniciar() {
    this.m = [];
  }
  draw() {
    let finX = this.m[this.filas - 1][this.columnas - 1].getPosition()[0];
    let finY = this.m[this.filas - 1][this.columnas - 1].getPosition()[1];
    let unCasillero =
      this.m[0][1].getPosition()[0] - this.m[0][0].getPosition()[0];
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)  ";
    this.ctx.strokeStyle = "rgba(55,55, 55, 0.8)";
    this.ctx.lineWidth = 15;

    this.ctx.drawImage(
      this.img,
      this.posX - 25 - 10,
      this.posY - 25 - 10,
      finX - this.posX + 20 + unCasillero,
      finY - this.posY + 20 + unCasillero
    );
    this.ctx.strokeRect(
      this.posX - 25 - 17,
      this.posY - 25 - 17,
      finX - this.posX + 34 + unCasillero,
      finY - this.posY + 34 + unCasillero
    );

    for (let i = 0; i < this.filas; i++) {
      for (let j = 0; j < this.columnas; j++) {
        let element = this.m[i][j];
        element.draw();
      }
    }
  }
}
