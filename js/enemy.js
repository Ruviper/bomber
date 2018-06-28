function Enemy(game, x_grilla, y_grilla) {
    this.game = game;
    this.width = 50;
    this.height = 50;
    this.x = x_grilla * this.width;
    this.y = y_grilla * this.height;   
    this.speed = 10;
    this.img = new Image();
    this.img.src = 'img/ghost-right.png';
    this.img.frames = 3;
    this.img.frameIndex = 0;
    this.vx = 50;
    this.vy = 50;
}

Enemy.prototype.draw = function() {
    this.game.ctx.drawImage(
        this.img,
        this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
        0,
        Math.floor(this.img.width / this.img.frames),
        this.img.height,
        this.x,
        this.y,
        this.width,
        this.height,
    );
    this.animateImg();
    this.move();
}

Enemy.prototype.animateImg = function() {
    if (this.game.framesCounter % 15 === 0) {
      this.img.frameIndex += 1;
      if (this.img.frameIndex > 2) this.img.frameIndex = 0;
    }
};


Enemy.prototype.move = function() {
    if (this.game.framesCounter % 50 === 0) {
        this.vx = -this.vx;
        this.x += this.vx;
        
    } 
    if (this.game.framesCounter % 25 === 0) {
        this.vy = -this.vy;
        this.y += this.vy;
    }
};




