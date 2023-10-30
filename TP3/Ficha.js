class Ficha {
  constructor(posX, posY, fill, context, radio) {
    this.posX = posX;
    this.posY = posY;
    this.fill = fill;
    this.ctx = context;
    this.radio = radio;
  }
  draw() {
    this.ctx.fillStyle = this.fill;
    this.ctx.beginPath();
    this.ctx.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
  }
}
