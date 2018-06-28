function Obstacle(game, x_grilla, y_grilla, type) {
  this.game = game;
  this.width = 50;
  this.height = 50;
  this.x = x_grilla * this.width;
  this.y = y_grilla * this.height;
  this.img = new Image();
  
  if(type == "rock"){
    this.img.src = 'img/roca.png';
  }else if(type == "bola"){
    this.img.src = 'img/bola.png';
  } else {
    throw new Error("NO HAY IMAGEN")
  }

}

Obstacle.prototype.draw = function() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
} 

