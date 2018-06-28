window.KEYBOARD = {
    space: 32,
    b: 66,
    up: 38,
    down: 40,
    left: 37,
    right: 39,
}

function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.fps = 60;
    this.framesCounter = 0;
    //this.reset();
    var that = this;
    document.onkeydown = function(e) {
        that.player.keyboardDown(e.keyCode);
    }
    document.onkeyup = function(e) {
        that.player.keyboardUp(e.keyCode);
    }
}

Game.prototype.start = function() {
    this.background = new Background(this);
    this.bomb = [];
    this.player = new Player(this);
    this.enemy = new Enemy(this);


    var block_positions = [
        [1,1],[1,3],[1,5],[1,7],[1,9],[1,11],[1,13],
        [3,1],[3,3],[3,5],[3,7],[3,9],[3,11],[3,13],
        [5,1],[5,3],[5,5],[5,7],[5,9],[5,11],[5,13],
        [7,1],[7,3],[7,5],[7,7],[7,9],[7,11],[7,13],
        [9,1],[9,3],[9,5],[9,7],[9,9],[9,11],[9,13],
        [11,1],[11,3],[11,5],[11,7],[11,9],[11,11],[11,13],
        [13,1],[13,3],[13,5],[13,7],[13,9],[13,11],[13,13],
    ];
    var rock_positions = [
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

    // Crea los obstaculos
    this.obstacles = [];
    var that = this;
    block_positions.forEach(function(blockPos){
        that.obstacles.push(new Obstacle(that, blockPos[0],blockPos[1],"bola"));
    });
    rock_positions.forEach(function(blockPos){
        that.obstacles.push(new Obstacle(that, blockPos[0],blockPos[1],"rock"));
    })


    window.requestAnimationFrame(this.update.bind(this))
}

Game.prototype.update = function() {
    
    this.framesCounter++;
    
    // Update objects in game
    var colliding = false;
    var that = this;
    this.obstacles.forEach(function(obstacle){
        if(that.player.isColliding(obstacle)){
            colliding = true;
        }
    })

    if(colliding){
        this.player.speedX = 0;
        this.player.speedY = 0;
    }

    this.player.update();

    // render objects in game
    this.background.draw();
 
    this.obstacles.forEach(function(obstacle){
        obstacle.draw();
    })
    this.bomb.forEach(function (b) {
        if(b.time >= 120) {
            b.draw();
        } 
        if(b.time < 120 && b.time > 0) {
            b.explosion();
            //b.compareObjects();
        }
        b.time-=1;
    });
    this.player.draw();

    window.requestAnimationFrame(this.update.bind(this));
}



