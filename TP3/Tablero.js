class Tablero {
  m;
  filas;
  columnas;
  casillero;
  constructor(filas, columnas, casillero) {
    this.filas = filas;
    this.columnas = columnas;
    this.casillero = casillero;
  }

  crear() {
    for (let i = 0; i < this.filas; i++) {
      this.m[i] = [];
      for (let j = 0; j < this.columnas; j++) {
        this.m[i][j] = null;
      }
    }
  }

  draw() {
    for (let i = 0; i < this.filas; i++) {
      for (let j = 0; j < this.columnas; j++) {
        this.m[i][j].dibujar();
      }
    }
  }
  dibujar() {
    this.casillero.draw();
  }
}
