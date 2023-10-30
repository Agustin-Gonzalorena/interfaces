class Casillero {
  constructor(posX, posY, fill, context, width, height) {
    this.posX = posX;
    this.posY = posY;
    this.fill = fill;
    this.ctx = context;
    this.width = width;
    this.height = height;
  }
  draw() {
    this.ctx.fillStyle = this.fill;
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
  }
}
