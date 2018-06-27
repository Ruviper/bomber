function Obstacle(game) {
  this.game = game;
  this.width = 50;
  this.height = 50;
  this.block = [
    [1,1],[1,3],[1,5],[1,7],[1,9],[1,11],[1,13],
    [3,1],[3,3],[3,5],[3,7],[3,9],[3,11],[3,13],
    [5,1],[5,3],[5,5],[5,7],[5,9],[5,11],[5,13],
    [7,1],[7,3],[7,5],[7,7],[7,9],[7,11],[7,13],
    [9,1],[9,3],[9,5],[9,7],[9,9],[9,11],[9,13],
    [11,1],[11,3],[11,5],[11,7],[11,9],[11,11],[11,13],
    [13,1],[13,3],[13,5],[13,7],[13,9],[13,11],[13,13],
];
  this.rock = [
    [0,4],[0,5],[0,9],[0,12],
    [1,4],[1,8],
    [2,1],[2,2],[2,6],[2,8],
    [3,0],[3,10],[3,14],
    [4,4],[4,6],[4,7],[4,10],
    [5,2],
    [6,1],[6,4],[6,6],[6,9],[6,12],
    [7,2],[7,10],
    [8,0],[8,3],[8,6],[8,8],[8,9],[8,14],
    [9,2],[9,4],
    [10,0],[10,5],[10,7],[10,9],[10,12],
    [11,2],[11,8],
    [12,2],[12,5],[12,8],[12,11],
    [13,4],[13,8],[13,12],
    [14,0],[14,4],[14,7],[14,11],
];
  this.imgRoca = new Image();
  this.imgRoca.src = 'img/roca.png';
  this.imgBola = new Image();
  this.imgBola.src = 'img/bola.png';  
}

Obstacle.prototype.draw = function(img, x, y, w, h) {
    this.game.ctx.drawImage(img, x, y, w, h);
} 

Obstacle.prototype.drawBlock = function() {
  var xBlock, yBlock;
    for (var i = 0; i < this.block.length; i++) {
      yBlock = (this.block[i][1]) * this.height;
      xBlock = (this.block[i][0]) * this.width;
      this.draw(this.imgBola, xBlock, yBlock, this.width, this.height)    
    } 
}

Obstacle.prototype.drawRock = function() {
  var xRock, yRock;
    for (var i = 0; i < this.rock.length; i++) {
      yRock = (this.rock[i][1]) * this.height;
      xRock = (this.rock[i][0]) * this.width;
      this.draw(this.imgRoca, xRock, yRock, this.width, this.height)
    }
}

