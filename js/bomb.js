function Bomb(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.imgBomb = new Image();
    this.imgBomb.src = 'img/bomb.png'
}

Bomb.prototype.draw = function() {
    this.game.ctx.drawImage(this.imgBomb, this.x, this.y, this.width, this.height);
}