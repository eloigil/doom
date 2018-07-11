'use strict';

class Game {
  constructor (canvas, width, height) {
    // canvas parameters
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = width;
    this.height = height;

    this._init();
  }

  _init () {
    this._resize(this.width, this.height);
  }

  _resize (width, height) {
    this.ctx.canvas.width = width;
    this.ctx.canvas.height = height;
    this.width = width;
    this.height = height;
  };

  _draw () {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.stage.draw();

    window.requestAnimationFrame(function () {
      this._draw();
    });
  };
}
