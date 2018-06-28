function Bomb(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.imgBomb = new Image();
    this.imgBomb.src = 'img/bomb.png';
    this.imgBomb.frames = 3;
    this.imgBomb.frameIndex = 0;    
}

Bomb.prototype.draw = function() {
    this.game.ctx.drawImage(
        this.imgBomb,
        this.imgBomb.frameIndex * Math.floor(this.imgBomb.width / this.imgBomb.frames),
        0,
        Math.floor(this.imgBomb.width / this.imgBomb.frames),
        this.imgBomb.height,
        this.x,
        this.y,
        this.width,
        this.height
    ); 
    this.animateImg();
}

Bomb.prototype.animateImg = function() {
    if (this.game.framesCounter % 6 === 0) {
      this.imgBomb.frameIndex += 1;
      if (this.imgBomb.frameIndex > 2) this.imgBomb.frameIndex = 0;
    }
};


    /* setTimeout(function() {
        clearRect(that.x, that.y, that.width, that.height)
    },1000) */