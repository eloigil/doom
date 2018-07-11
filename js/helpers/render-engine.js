'use strict';

class RenderEngine {
  constructor (ctx, canvas) {
    // canvas parameters
    this.ctx = ctx;
    this.canvas = canvas;
  }

  _draw () {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.stage.draw();

    window.requestAnimationFrame(function () {
      this._draw();
    });
  };

  frame () {
    window.requestAnimationFrame(() => this._frame());
  }
}
