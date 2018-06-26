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
    this.enemy = new Enemy(this);
    this.updateCanvas();
}

Game.prototype.updateCanvas = function() {
    var that = this;
    this.intervalId = setInterval(function() {
        that.background.draw();
        that.player.draw();
        that.enemy.draw();
        that.obstacle.drawBlock();
    }, 100);
}

Game.prototype.checkIfCollision = function(x, y) {
    var arr = this.obstacle.block;
    var collision = false;
   
    for (var i = 0; i< arr.length; i++) {
      if (
      x < arr[i][0] * 100 + 100 &&
      x + 100 > arr[i][0]*100 &&
      y < arr[i][1] * 100 + 100 &&
      100 + y > arr[i][1]*100)
      {
      collision = true;
      }
    }
    return collision;
  }


