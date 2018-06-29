window.KEYBOARD = {
    b: 66,
    up: 38,
    down: 40,
    left: 37,
    right: 39,
}

var time = document.getElementById('timer');

function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.fpsCounter = 0;
    this.framesCounter = 0;
    this.finish = false;
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
    this.gameAudio = new Audio();
    this.gameAudio.src = 'sounds/FreakInvadersTheme.ogg';
    this.gameAudio.loop = true;
    this.time = 60;
    var enemy_positions = [[0,6],[2,10],[4,5],[6,0],[14,10],[14,13],[5,8],[1,14],[13,12],[0,12],[2,10],[7,2],[6,14],[9,12],[8,8],[10,2],[10,10],[13,6],[4.4]]
    this.enemies = [];
    var that = this;
    enemy_positions.forEach(function(enemyPos) {
        that.enemies.push(new Enemy(that, enemyPos[0],enemyPos[1]))
    })

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
        [5,2],[5,14],[10,14],
        [6,1],[6,4],[6,6],[6,9],[6,12],
        [7,2],[7,10],
        [8,0],[8,3],[8,6],[8,8],[8,9],[8,14],
        [9,2],[9,4],
        [10,0],[10,5],[10,7],[10,9],[10,12],
        [11,2],[11,8],
        [12,2],[12,5],[12,8],[12,11],
        [13,4],[13,8],[13,12],
        [14,0],[14,4],[14,7],[14,8],[14,9],[14,11],
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
    if (!this.finish) window.requestAnimationFrame(this.update.bind(this))
}

Game.prototype.update = function() {
    this.finish = false;
    this.framesCounter++;
    this.chronometer(); 
    this.gameOver();
    // Update objects in game
    var colliding = false;
    var that = this;
    this.obstacles.forEach(function(obstacle) {
        if (that.player.isColliding(obstacle)) {
            colliding = true;
        }
    })

    this.enemies.forEach(function(enemy) {
        if (that.player.isColliding(enemy)) {
            colliding = true;
        }
    })
    if (colliding) {
        this.player.speedX = 0;
        this.player.speedY = 0;
    }

    this.player.update();

    // render objects in game
    this.background.draw();
 
    this.obstacles.forEach(function(obstacle) {
        obstacle.draw();
    })
    
    this.bomb.forEach(function (b) {
        if(b.time >= 50) {
            b.draw();
        } 
        if(b.time < 50 && b.time > 30) {
            b.explosion();
        }
        b.time-=1;
    });
    this.player.draw();
    
    this.enemies.forEach(function(enemy) {
        enemy.draw();
    })

    window.requestAnimationFrame(this.update.bind(this));
}

Game.prototype.chronometer = function(time) {
    this.fpsCounter++;
    if (this.fpsCounter % 60 === 0) {
        this.time--;
        this.fpsCounter = 0;
        timer.innerHTML = 'Time: ' + this.time;
    }
} 

Game.prototype.stop = function() {
    this.finish = true;
}

Game.prototype.gameOver = function() {
    if (this.player.x === this.canvas.width - this.player.width && this.player.y === this.canvas.height - this.player.height) {
        this.stop();
        if (confirm('YOU WIN. PLAY AGAIN?')) {
            this.start();
        }
    }
    if (this.time === 0) {
        this.stop();
        if (confirm("GAME OVER. PLAY AGAIN?")) {
            this.start();
        } 
    }
}