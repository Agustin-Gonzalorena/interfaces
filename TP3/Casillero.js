class Casillero {
  constructor(posX, posY, context, radio) {
    this.posX = posX;
    this.posY = posY;
    this.ctx = context;
    this.radio = radio;
  }
  draw() {
    this.ctx.fillStyle = " rgba(0, 0,0, 0.4)";
    this.ctx.beginPath();
    this.ctx.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
  }
  getPosition() {
    return [this.posX, this.posY];
  }
  getElemento() {
    return "casillero";
  }
}
