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
            //this.game.ctx.drawImage(this.imgSuelo, 0, 0, 100, 100)
        }
    } 
}

Background.prototype.draw = function() {
    //var that = this;
    for (var i = 0; i < this.grid.length; i++) {
        this.game.ctx.drawImage(
            this.imgSuelo,
            this.grid[i].x,
            this.grid[i].y,
            100,
            100
          );            
    }
}


