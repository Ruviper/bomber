function Background(game) {
    this.game = game;
    this.grid = [];
    this.obstacle;
    this.imgSuelo = new Image();
    this.imgSuelo.src='img/suelo.png'
    this.floor();
  
}

Background.prototype.floor = function() {
    for (var i = 0; i <= this.game.width; i+=50) {
        for (var j = 0; j <= this.game.width; j+=50) {
            this.grid.push({x: i, y: j});
        }
    } 
}

Background.prototype.draw = function() {
    for (var i = 0; i < this.grid.length; i++) {
        this.game.ctx.drawImage(
            this.imgSuelo,
            this.grid[i].x,
            this.grid[i].y,
            100,
            100,
        );
            this.game.ctx.fillStyle = "green",
            this.game.ctx.fillRect(700, 700, 50, 50)         
    }
}


