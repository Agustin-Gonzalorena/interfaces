class Ficha {
  constructor(posX, posY, radio, fill, context, tipo, img) {
    this.posX = posX;
    this.posY = posY;
    this.fill = fill;
    this.ctx = context;
    this.radio = radio;
    this.resaltado = false;
    this.posIncial = [posX, posY];
    this.tipo = tipo;
    this.disponible = true;
    this.ganadora = false;
    this.img = img;
  }
  setMove(move) {
    this.disponible = move;
  }
  getMove() {
    return this.disponible;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.drawImage(
      this.img,
      this.posX - this.radio - 1.2,
      this.posY - this.radio - 1.2,
      this.radio * 2.1,
      this.radio * 2.1
    );
    this.ctx.closePath();
  }
  setPosition(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }
  setResaltado(resaltado) {
    this.resaltado = resaltado;
  }
  getPosition() {
    return [this.posX, this.posY];
  }
  isPointInside(x, y) {
    //saber si el punto esta dentro de la figura
    let x1 = this.posX + this.radio / 2 - x;
    let y1 = this.posY + this.radio / 2 - y;
    let distancia = Math.sqrt(x1 * x1 + y1 * y1);
    return distancia < this.radio + 5;
  }
  getElemento() {
    return "ficha";
  }
}
