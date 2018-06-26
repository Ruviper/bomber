function Player(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.Speed = 1;
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
    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 38:
          if (this.y <= 1100 && this.y > 0) {
            this.y -= 100;
            return;
          } else {
            this.move('y', -100);
            //this.y -= this.v;
          }
          break;
  
        case 40:
          if (this.y >= 0 && this.y < 1000) {
            this.y += 100;
            return;
          } else {
            this.move('y', 100);
            //this.y += this.v;
          }
          break;
  
        case 37:
          if (this.x <= 1100 && this.x > 0) {
            this.x -= 100;
            return;
          } else {
            this.move('x', -100);
            // this.x -= this.v;
          }
          break;
  
        case 39:
          if (this.x >= 0 && this.x < 1000) {
            this.x += 100;
            return;
          } else {
            this.move('x', 100);
            // this.x += this.v;
          }
          break;
      }
    }.bind(this);
  };

Player.prototype.move = function(coor, v) {
  var x = this.x;
  var y = this.y;
  if (coor === 'x') x += v*this.v;
  if (coor === 'y') y += v*this.v; 
  // console.log(x,y);
  if (!this.game.checkIfCollision(x, y)) {
    if (coor === 'x') this.x += v*this.v;
    if (coor === 'y') this.y += v*this.v; 
  }
  else {
    console.log('collision')
  }
};  