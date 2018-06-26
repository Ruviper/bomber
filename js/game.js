function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.fps = 60;
    //this.reset();
}

Game.prototype.start = function() {
    this.background = new Background(this);
    this.player = new Player(this);
    this.obstacle = new Obstacle(this);    
    this.updateCanvas();
}

Game.prototype.updateCanvas = function() {
    var that = this;
    this.intervalId = setInterval(function() {
        that.background.draw();
        that.player.draw()
        that.obstacle.drawBlock();
    }, 1000);
}




