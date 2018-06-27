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

/* obstacle.prototype.obstacle = function() {
    for (var i = 0; i <= this.game.width; i+100) {
        for (var j = 0; j <= this.game.height; j+100) {
            
        }
    }
} */


/* function Obstacle(game){
    this.game = game;
     this.imgGrid = new Image();
     this.imgGrid.src = "images/vLLgDyu.png";
     this.imgeRock = new Image();
     this.imgeRock.src = "images/Dq6ZD3l.png";
     this.imgeGem = new Image();
     this.imgeGem.src = "images/pink-diamond-1056757_640.png";
     this.imgeMine = new Image();
     this.imgeMine.src = "images/Mine.png";
     this.sandBlocks = [];
     this.createSand();
     
   
     this.gridX = 33;
     this.gridY = 16;
     this.arrObs = [
       [
         Math.ceil(Math.random() * (this.gridX - 1)),
         Math.ceil(Math.random() * (this.gridY - 1))
       ]
     ];
     this.numMines = 30;
     this.numGems = 50;
     this.numRocks = 150;
     this.numObs = this.numMines + this.numGems + this.numRocks;
   
     this.rockBlocks = [];
     this.gemBlocks = [];
     this.mineBlocks = [];
     this.createAll();
   }
   
   
   Obstacle.prototype.createAll = function() {
     var x, y;
     while (this.arrObs.length < this.numObs) {
       x = Math.ceil(Math.random() * (this.gridX - 1));
       y = Math.ceil(Math.random() * (this.gridY - 1));
       this.arrObs.push([x, y]);
       for (var i = 0; i < this.arrObs.length - 1; i++) {
         if ((this.arrObs[i][0] === x && this.arrObs[i][1] === y) || (x=== 1 && y === 1)) {
           this.arrObs.pop();
           break;
         }
       }
     }
     this.rockBlocks = this.arrObs.splice(0, this.numRocks);
     this.gemBlocks = this.arrObs.splice(0, this.numGems);
     this.mineBlocks = this.arrObs.splice(0, this.numMines);
   };
   
   Obstacle.prototype.drawGrid = function() {
     for (i = 0; i < this.sandBlocks.length; i++) {
       this.game.ctx.drawImage(
         this.imgGrid,
         this.sandBlocks[i].x,
         this.sandBlocks[i].y,
         40,
         40
       );
     }
     for (i = 0; i < this.rockBlocks.length; i++) {
       this.game.ctx.drawImage(
         this.imgeRock,
         this.rockBlocks[i][0] * 40,
         this.rockBlocks[i][1] * 40,
         35,
         35
       );
     }
     for (i = 0; i < this.gemBlocks.length; i++) {
       this.game.ctx.drawImage(
         this.imgeGem,
         this.gemBlocks[i][0] * 40,
         this.gemBlocks[i][1] * 40,
         40,
         40
       );
     }
     for (var j = 0; j < this.mineBlocks.length; j++) {
       var x = this.mineBlocks[j];
       this.game.ctx.drawImage(this.imgeMine, x[0] * 40, x[1] * 40, 40, 40);
     }
   };
   
   Obstacle.prototype.createSand = function() {
     var w = this.game.canvas.width;
     var h = this.game.canvas.height;
   
     for (x = 40; x <= w - 40; x += 40) {
       for (y = 40; y <= h - 40; y += 40) {
         this.sandBlocks.push({ x: x, y: y });
       }
     }
   }; */