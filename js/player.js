function Player(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.Speed = 50;
    this.width = 100;
    this.height = 100;
    //this.life = life;
    //this.score = score;
    this.img = new Image();
    this.img.src = 'https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif';
    this.setListeners();   
}

Player.prototype.draw = function() {
    var that = this;
    this.game.ctx.drawImage(that.img, this.x, this.y, this.width, this.height);
    // this.img.onload = function(){
    //     that.game.ctx.drawImage(that.img, 150, 150, 200, 200);
    // }
}  

Player.prototype.setListeners = function() {
    console.log('move')
    document.onkeydown = function(e) {
        switch (e.keyCode) {
          case 38: // Up
          console.log('up')
            if (this.y <= this.height) {
              this.y = 0;
              return;
            } else {
              this.move('y', -1);
              //this.y -= this.v;
            }
            break;
    
          case 40: // Down
          console.log('down')
            if (this.y >= this.game.canvas.height - this.height) {
              this.y = this.game.canvas.height - this.height;
              return;
            } else {
              this.move('y', 1);
              //this.y += this.v;
            }
            break;
    
          case 37: // Left
            if (this.x <= this.width) {
              this.x = 0;
              return;
            } else {
              this.move('x', -1);
              // this.x -= this.v;
            }
            break;
    
          case 39: // Right
            if (this.x >= this.game.canvas.width-this.width) {
              this.x = this.game.canvas.width-this.width;
              return;
            } else {
              this.move('x', 1);
              // this.x += this.v;
            }
            break;
        } 
    }.bind(this);
};

Player.prototype.move = function(coor, v) {
  if (coor === 'x') this.x += v*this.Speed;
  if (coor === 'y') this.y += v*this.Speed; 
  // console.log(x,y);
  if (!this.game.checkIfCollision(this.x, this.y)) {
    if (coor === 'x') this.x += v*this.Speed;
    if (coor === 'y') this.y += v*this.Speed;
   }
    else {
      console.log('collision')
   }
};  