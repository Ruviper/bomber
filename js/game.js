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
    this.bomb = new Bomb(this);
    this.updateCanvas();
}

Game.prototype.updateCanvas = function() {
    var that = this;
    this.intervalId = setInterval(function() {
        that.background.draw();
        that.player.draw();
        that.enemy.draw();
        that.obstacle.drawBlock();
        that.obstacle.drawRock();
        that.bomb.draw();
    }, 100);
}

Game.prototype.checkIfCollision = function(x, y) {
    var arr = this.obstacle.block;
    var arr2 = this.obstacle.rock;
    var collision = false;
   
    for (var i = 0; i< arr.length; i++) {
      if (
      x < arr[i][0] * 50 + 50 &&
      x + 50 > arr[i][0]*50 &&
      y < arr[i][1] * 50 + 50 &&
      50 + y > arr[i][1]*50)
      {
        collision = true;
      }
    }
    for (var j = 0; j< arr2.length; j++) {
        if (
            x < arr2[j][0] * 50 + 50 &&
            x + 50 > arr2[j][0]*50 &&
            y < arr2[j][1] * 50 + 50 &&
            50 + y > arr2[j][1]*50)
            {
          collision = true;
        }
      }
      return collision;
  
}


