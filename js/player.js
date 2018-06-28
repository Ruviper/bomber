function Player(game) {
  this.game = game;
  this.x = 0;
  this.y = 0;
  this.speedX = 0;
  this.speedY = 0;
  this.maxSpeed = 3;

  this.width = 50;
  this.height = 50;
  //this.life = life;
  //this.score = score;

  this.images = {
    up: "img/bomber-up.png",
    down: "img/bomber-down.png",
    left: "img/bomber-left.png",
    right: "img/bomber-right.png"
  };
  this.sprite = {};
  this.frameIndex = 0;
  //Load all sprites
  var that = this;
  Object.keys(this.images).forEach(function(key) {
    var image = new Image();
    image.src = that.images[key];;
    that.sprite[key] = image;
  });
  this.img = this.sprite.right;

}

Player.prototype.draw = function() {

  if (this.speedX > 0) {
    this.img = this.sprite.right;
  }
  if (this.speedX < 0) {
    this.img = this.sprite.left;
  }

  if (this.speedY > 0) {
    this.img = this.sprite.down;
  }
  if (this.speedY < 0) {
    this.img = this.sprite.up;
  }
  this.game.ctx.drawImage(
    this.img,
    18*Math.floor(this.frameIndex/10),
    0,
    15,
    20,
    this.x,
    this.y,
    50,
    50
  );
};

Player.prototype.dropBomb = function() {
  this.game.bomb.push(new Bomb(this.game, this.x, this.y));
};

Player.prototype.update = function() {
  this.frameIndex = (this.frameIndex+1) % 30;
  this.x += this.speedX;
  this.y += this.speedY;
};

Player.prototype.keyboardDown = function(key) {
  switch (key) {
    case KEYBOARD.space:
      return this.dropBomb();
    case KEYBOARD.up:
      this.speedY = -this.maxSpeed;
      return;
    case KEYBOARD.down:
      this.speedY = this.maxSpeed;
      return;
    case KEYBOARD.left:
      this.speedX = -this.maxSpeed;
      return;
    case KEYBOARD.right:
      this.speedX = this.maxSpeed;
      return;
  }
};

Player.prototype.keyboardUp = function(key) {
  switch (key) {
    case KEYBOARD.up:
      this.speedY = 0;
      return;
    case KEYBOARD.down:
      this.speedY = 0;
      return;
    case KEYBOARD.left:
      this.speedX = 0;
      return;
    case KEYBOARD.right:
      this.speedX = 0;
      return;
  }
};

Player.prototype.isColliding = function(obstacle) {
  if (
    this.x + this.speedX < obstacle.x + obstacle.width-10 &&
    this.x + this.speedX + obstacle.width-10 > obstacle.x &&
    this.y + this.speedY < obstacle.y + obstacle.height-10 &&
    this.y + this.speedY + obstacle.height-10 > obstacle.y
  ) {
    return true;
  }
  return false;
};
