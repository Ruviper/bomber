function Bomb(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    //this.gridX = Math.floor(x/50);
    //this.gridY = Math.floor(y/50);
    this.width = 50;
    this.height = 50;
    this.imgBomb = new Image();
    this.imgBomb.src = 'img/bomb.png';
    this.imgBomb.frames = 3;
    this.imgBomb.frameIndex = 0; 
    this.time = 5 * 60;  
    this.imgExplosion = new Image();
    this.imgExplosion.src = 'img/explosion.png';
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

Bomb.prototype.explosion = function() {
    this.game.ctx.drawImage(
        this.imgExplosion,
        this.x,
        this.y,
        this.width,
        this.height,
    )
    this.compareObjects();
}

Bomb.prototype.compareObjects = function(b) {
    var that = this;
    console.log('obstacles length')
    console.log(this.game.obstacles.length)
    var rocks = this.game.obstacles.filter(function (obs) {
        return obs.type === 'rock';
    })
    
    rocks.forEach(function(e) {
        if(e.x == that.x + 50 && e.y == that.y){ // derecha
            var pos = that.game.obstacles.indexOf(e);
            that.game.obstacles.splice(pos, 1);
        }
        if(e.x == that.x - 50 && e.y == that.y){ //izquierda
            var pos = that.game.obstacles.indexOf(e);
            that.game.obstacles.splice(pos, 1);
        }
        if(e.x == that.x && e.y == that.y + 50){ // debajo
            var pos = that.game.obstacles.indexOf(e);
            that.game.obstacles.splice(pos, 1);
        }
        if(e.x == that.x && e.y == that.y - 50){ // encima
            var pos = that.game.obstacles.indexOf(e);
            that.game.obstacles.splice(pos, 1);
        }
    });
}


