function Enemy(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.enemy = [0,6],[2,10],[4,5],[6,0],[9,11],[12,2];
    this.speed = 10;
    this.width = 50;
    this.height = 50;
    //this.life = life;
    //this.score = score;
    this.img = new Image();
    this.img.src = 'http://www.clker.com/cliparts/v/x/z/s/1/x/pacman-md.png';
    this.createEnemies();   
}
Enemy.prototype.createEnemies = function() {
    console.log("enemy")
    for (var i = 0; i < this.enemy.length; i++) {
        this.game.ctx.drawImage(
            this.img,
            this.enemy[i].x,
            this.enemy[i].y,
        )
    } console.log("enemy")
}

Enemy.prototype.draw = function() {
    var that = this;
    this.game.ctx.drawImage(that.img, this.x, this.y, this.width, this.height);
} 



