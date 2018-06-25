function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.fps = 60;
    this.reset();
}

Game.prototype.start = function() {
    this.player = new Player();
    
}

/* var board = [
      [player,null,null,null,obstacle,obstacle,enemy,null,null,obstacle,null],
      [null,block,null,block,obstacle,block,null,block,obstacle,block,null],
      [null,obstacle,obstacle,null,null,null,obstacle,null,obstacle,null,null],
      [obstacle,block,null,block,null,block,null,block,null,block,obstacle],
      [null,null,enemy,null,obstacle,null,obstacle,obstacle,null,null,obstacle],
      [null,block,obstacle,block,null,block,null,block,null,block,null],
      [null,obstacle,null,null,obstacle,null,obstacle,enemy,null,obstacle,null],
      [null,block,obstacle,block,null,block,null,block,null,block,obstacle],
      [obstacle,obstacle,null,obstacle,null,null,obstacle,null,obstacle,obstacle,null],
      [null,block,obstacle,block,obstacle,block,null,block,null,block,null,block],
      [obstacle,null,null,null,enemy,obstacle,null,null,obstacle,null,null],
    ] */



