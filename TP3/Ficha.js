class Ficha {
  constructor(posX, posY, radio, fill, context, tipo) {
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
  }
  draw() {
    this.ctx.fillStyle = this.fill;
    this.ctx.beginPath();
    this.ctx.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.strokeStyle = "black";
    this.ctx.lineWidth = 1;
    if (this.resaltado) {
      this.ctx.strokeStyle = "yellow";
      this.ctx.lineWidth = 5;
    }
    this.ctx.stroke();
    this.ctx.closePath();
  }
  position() {
    return [this.posX, this.posY];
  }
  setPosition(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }
  setResaltado(resaltado) {
    this.resaltado = resaltado;
  }
  isPointInside(x, y) {
    //saber si el punto esta dentro de la figura
    let x1 = this.posX + this.radio / 2 - x;
    let y1 = this.posY + this.radio / 2 - y;
    let distancia = Math.sqrt(x1 * x1 + y1 * y1);
    return distancia < this.radio + 5;
  }
}
