function Player(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.Speed = 10;
    this.width = 50;
    this.height = 50;
    this.bomb;
    //this.life = life;
    //this.score = score;
    this.img = new Image();
    this.img.src = 'img/bomber-down.png';
    this.img.frames = 3;
    this.img.frameIndex = 0;
    this.setListeners();   
}

Player.prototype.draw = function() {
    this.game.ctx.drawImage(
      this.img,
      this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
      0,
      Math.floor(this.img.width / this.img.frames),
      this.img.height,
      this.x,
      this.y,
      this.width,
      this.height
    ); 
    this.animateImg();
}

Player.prototype.setListeners = function() {
    document.onkeydown = function(e) {
        switch (e.keyCode) {
          case 32: // Space
            this.game.bomb.push(new Bomb(this.game, this.x, this.y));
            break;
          case 66: // b
          console.log(e.keyCode)
            this.game.bomb.shift();
            break;
          case 38: // Up
            this.img.src = "img/bomber-up.png"
            if (this.y <= this.height-40) {
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
            if (this.x <= this.width-40) {
              this.x = 0;
              return;
            } else {
              this.move('x', -1);
            }
            break;
          case 39: // Right
          this.img.src = "img/bomber-rigth.png"
            if (this.x >= this.game.canvas.width-this.width) {
              this.x = this.game.canvas.width-this.width;this.animateImg();
              return;
            } else {
              this.move('x', 1);
            }
            break;
        } 
    }.bind(this);
};

Player.prototype.animateImg = function() {
    if (this.game.framesCounter % 6 === 0) {
      this.img.frameIndex += 1;
      if (this.img.frameIndex > 2) this.img.frameIndex = 0;
    }
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