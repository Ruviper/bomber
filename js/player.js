function Player(game) {
    this.game = game;
    this.x = 25;
    this.y = 25;
    this.Speed = 1;
    this.width = 50;
    this.heigh = 50;
    this.life = life;
    this.score = score;
    this.img = new Image();
    this.img.src = 'https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif'
}

Player.prototype.draw = function() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.heigh);
}  

Player.prototype.move = function() {
    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 38: player.moveUp();    break;
            case 40: player.moveDown();  break;
            case 37: player.moveLeft();  break;
            case 39: player.moveRight(); break;
        }
    }
}

function updateCanvas() {
    this.game.ctx.clearRect(0,0,1100,1100);
    this.draw()
}

