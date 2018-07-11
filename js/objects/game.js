'use strict';

function Game(canvas, width, height) {
    var self = this;

    self.canvas = canvas;
    self.ctx = canvas.getContext('2d');

    self.resize(width, height);

    self.draw();
}

Game.prototype.resize = function (width, height) {
    var self = this;

    self.ctx.canvas.width = width;
    self.ctx.canvas.height = height;
    self.width = width;
    self.height = height;
};


Game.prototype._draw = function () {
    var self = this;

    self.ctx.clearRect(0, 0, self.width, self.height);
    self.stage.draw();

    window.requestAnimationFrame(function () {
        self._draw();
    });
};