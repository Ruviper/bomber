function Player(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.Speed = 50;
    this.width = 50;
    this.height = 50;
    //this.life = life;
    //this.score = score;
    this.img = new Image();
    this.img.src = 'img/bomber-stop.png';
    this.setListeners();   
}

Player.prototype.draw = function() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}  

Player.prototype.setListeners = function() {
    document.onkeydown = function(e) {
        switch (e.keyCode) {
          case 32: 
            if (this.x <= 500) {
               this.bomb.draw();
            }
          case 38: // Up
            this.img.src = "img/bomber-up.png"
            if (this.y <= this.height) {
              this.y = 0;
              return;
            } else {
              this.move('y', -1);
            }
            break;
          case 40: // Down
          this.img.src = "img/bomber-down.png"
            if (this.y >= this.game.canvas.height - this.height) {
              this.y = this.game.canvas.height - this.height;
              return;
            } else {
              this.move('y', 1);
            }
            break;
          case 37: // Left
          this.img.src = "img/bomber-left.png"
            if (this.x <= this.width) {
              this.x = 0;
              return;
            } else {
              this.move('x', -1);
            }
            break;
          case 39: // Right
          this.img.src = "img/bomber-rigth.png"
            if (this.x >= this.game.canvas.width-this.width) {
              this.x = this.game.canvas.width-this.width;
              return;
            } else {
              this.move('x', 1);
            }
            break;
        } 
    }.bind(this);
};

Player.prototype.move = function(coor, v) {
    var x = this.x;
    var y = this.y;
    if (coor === 'x') x += v*this.Speed;
    if (coor === 'y') y += v*this.Speed; 
   console.log(x,y);
  if (!this.game.checkIfCollision(x, y)) {
    this.x = x;
    this.y = y;
   }
    else {
      console.log('collision')
   }
};  