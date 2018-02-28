'use strict';

function Battle(ctx, player) {
    var self = this;

    self.ctx = ctx;

    self.champ1 = champ1;
    self.champ2 = champ2;

    // console.log(self.champ1 + self.champ2);

    self.player1 = new Player(self.ctx, 'red', 0.1, false, true, self.champ1 /*, charcater1*/);
    self.player2 = new Player(self.ctx, 'blue', 0.8, true, false, self.champ2 /*, charcater2*/);

    self.healthBar1 = new HealthBar(self.ctx, true);
    self.healthBar2 = new HealthBar(self.ctx, false);

    self.bullets = [];
    self.bulletMovingLeft = true;

    self.battleBackground = new Image();
    self.battleBackground.src = 'img/battleBackground.jpg';

    self.isOver = 0;

}

Battle.prototype.draw = function () {
    var self = this;

    if (self.healthBar2.health === 0) {
        self.isOver = 1;
    }
    if (self.healthBar1.health === 0) {
        self.isOver = 2;
    }
    self.ctx.drawImage(self.battleBackground, 0, 0, self.ctx.canvas.width, self.ctx.canvas.height);

    self.face();
    self.player1.draw();
    self.player2.draw();

    self.bullets.forEach(function (bullet) {
        bullet.draw();
    });

    self.bulletCollision();

    self.bullets = self.bullets.filter(function (bullet) {
        if (!bullet.done) {
            return true;
        } else {
            if (bullet.movingLeft) {
                self.player2.bulletDone();
            } else {
                self.player1.bulletDone();
            }
        }
    });

    self.healthBar2.draw();
    self.healthBar1.draw();

};

Battle.prototype.handleKeyDown = function (keyCode) {
    var self = this;

    if (keyCode === 65) {
        self.player1.moveLeft();
    } else if (keyCode === 68) {
        self.player1.moveRight();
    } else if (keyCode === 87 && !self.player1.isJumping && !self.player1.isFalling) {
        self.player1.jump();
    } else if (keyCode === 83) {
        if (self.player1.canShoot()) {
            self.bullets.push(new Bullet(self.ctx, self.player1.width, !self.bulletMovingLeft, self.player1.x, self.player1.y));
        }
    }
    if (keyCode === 74) {
        self.player2.moveLeft();
    } else if (keyCode === 76) {
        self.player2.moveRight();
    } else if (keyCode === 73 && !self.player2.isJumping && !self.player2.isFalling) {
        self.player2.jump();
    } else if (keyCode === 75) {
        if (self.player2.canShoot()) {
            self.bullets.push(new Bullet(self.ctx, self.player2.width, self.bulletMovingLeft, self.player2.x, self.player2.y));
        }
    }
};

Battle.prototype.bulletCollision = function () {
    var self = this;


    self.bullets.forEach(function (bullet) {
        if (bullet.movingLeft === false) {
            if (bullet.x + bullet.width > self.player2.x && bullet.x + bullet.width < self.player2.x + self.player2.width) {
                if (bullet.y > self.player2.y && bullet.y < self.player2.y + self.player2.height) {
                    bullet.done = true;

                    if (self.healthBar2.health > 0) {
                        self.healthBar2.health -= 10;
                    }
                }
            }
            if (bullet.x + bullet.width > self.player1.x && bullet.x + bullet.width < self.player1.x + self.player1.width) { //// it can collide in both directions if players switch orientation
                if (bullet.y > self.player1.y && bullet.y < self.player1.y + self.player1.height) {
                    bullet.done = true;
                    if (self.healthBar1.health > 0) {
                        self.healthBar1.health -= 10;
                    }

                }
            }

        }
        if (bullet.movingLeft === true) {
            if (bullet.x < self.player1.x + self.player1.width && bullet.x > self.player1.x) {
                if (bullet.y > self.player1.y && bullet.y < self.player1.y + self.player1.height) {
                    bullet.done = true;
                    if (self.healthBar1.health > 0) {
                        self.healthBar1.health -= 10;
                    }

                }
            }
            if (bullet.x < self.player2.x + self.player2.width && bullet.x > self.player2.x) {
                if (bullet.y > self.player2.y && bullet.y < self.player2.y + self.player2.height) {
                    bullet.done = true;
                    if (self.healthBar2.health > 0) {
                        self.healthBar2.health -= 10;
                    }

                }
            }
        }
    });
};

Battle.prototype.face = function () {
    var self = this;
    if (self.player1.x < self.player2.x) {
        self.bulletMovingLeft = true;
        self.player1.facingLeft = false;
        self.player2.facingLeft = true;

    } else if (self.player1.x > self.player2.x) {
        self.bulletMovingLeft = false;
        self.player1.facingLeft = true;
        self.player2.facingLeft = false;
    }
};
