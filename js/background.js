function Background() {
    this.board = [
        [,,,,,,,,,,],
        [,,,,,,,,,,],
        [,,,,,,,,,,],
        [,,,,,,,,,,],
        [,,,,,,,,,,],
        [,,,,,,,,,,],
        [,,,,,,,,,,],
        [,,,,,,,,,,],
        [,,,,,,,,,,],
        [,,,,,,,,,,],
        [,,,,,,,,,,],
      ];
      this.block;
      this.obstacle;
  
}

Background.prototype.block = function() {[
    [1,1],[1,3],[1,5],[1,7],[1,9],
    [3,1],[3,3],[3,5],[3,7],[3,9],
    [5,1],[5,3],[5,5],[5,7],[5,9],
    [7,1],[7,3],[7,5],[7,7],[7,9],
    [9,1],[9,3],[9,5],[9,7],[9,9],
]};

Background.prototype.obstacle = function() {[
    [0,4],[0,5],[0,9],
    [1,4],[1,8],
    [2,1],[2,2],[2,6],[2,8],
    [3,0],[3,10],
    [4,4],[4,6],[4,7],[4,10],
    [5,2],
    [6,1],[6,4],[6,6],[6,9],
    [7,2],[7,10],
    [8,0],[8,1],[8,3],[8,6],[8,8],[8,9],
    [9,2],[9,4],
    [10,0],[10,5],
]}

