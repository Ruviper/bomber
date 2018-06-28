function Enemy(game) {
    this.game = game;
    //this.x = x;
    //this.y = y;
    this.enemy = [[0,6],[2,10],[4,5],[6,0],[9,12],[12,2],[13,6]];   
    this.speed = 10;
    this.width = 50;
    this.height = 50;
    //this.life = life;
    //this.score = score;
    this.img = new Image();
    this.img.src = 'img/ghost-up.png';
    this.img.frames = 3;
    this.img.frameIndex = 0;  
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
}

Enemy.prototype.drawEnemy = function() {
    var xEnemy, yEnemy;
    for (var i = 0; i < this.enemy.length; i++) {
        yEnemy = (this.enemy[i][0]) * this.height;
        xEnemy = (this.enemy[i][1]) * this.width;
        this.draw(this.img, xEnemy, yEnemy, this.width, this.height);
    } 
}

Enemy.prototype.animateImg = function() {
    if (this.game.framesCounter % 2 === 0) {
      this.img.frameIndex += 1;
      if (this.img.frameIndex > 2) this.img.frameIndex = 0;
    }
};

// Enemy.prototype.draw = function() {
//     var that = this;
//     this.game.ctx.drawImage(that.img, this.x, this.y, this.width, this.height); 
// } 



