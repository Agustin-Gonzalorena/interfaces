class Juego {
  tablero;
  jugador1;
  jugador2;
  turno;
  ganador;
  constructor(filas, columnas) {
    this.tablero = new Tablero(filas, columnas);
    this.jugador1 = new Jugador("X");
    this.jugador2 = new Jugador("O");
    this.turno = this.jugador1;
    this.ganador = null;
  }
}
