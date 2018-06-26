function Enemy(game) {
    this.game = game;
    this.x = 600;
    this.y = 500;
    this.Speed = 20;
    this.width = 100;
    this.height = 100;
    //this.life = life;
    //this.score = score;
    this.img = new Image();
    this.img.src = 'http://www.clker.com/cliparts/v/x/z/s/1/x/pacman-md.png';   
}

Enemy.prototype.draw = function() {
    var that = this;
    this.game.ctx.drawImage(that.img, this.x, this.y, this.width, this.height);
    // this.img.onload = function(){
    //     that.game.ctx.drawImage(that.img, 150, 150, 200, 200);
    // }
} 

