function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.fps = 60;
    //this.reset();
}

Game.prototype.start = function() {
    this.player = new Player(this);
    this.player.draw()
    
}




