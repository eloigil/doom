'use strict';

class RenderEngine {
  constructor (ctx, canvas) {
    // canvas parameters
    this.ctx = ctx;
    this.canvas = canvas;

    this.renderElements = {
    };
  }

  frame () {
    this._clearCanvas();
    this._draw();
    window.requestAnimationFrame(() => this.frame());
  }

  _draw () {
    this.ctx.fillRect(
      this.renderElements.players[0].position.x,
      this.renderElements.players[0].position.y,
      this.renderElements.players[0].size.x,
      this.renderElements.players[0].size.y
    );
  };

  _clearCanvas () {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}
