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
    for (let elements in this.renderElements) {
      this.renderElements[elements].forEach(element => {
        this._drawElement(element);
      });
    }
  };

  _drawElement (element) {
    // drawing from the position center of the element
    const leftEdge = element.position.x - element.size.x / 2;
    const topEdge = element.position.y - element.size.y / 2;

    this.ctx.fillRect(leftEdge,
      topEdge,
      element.size.x,
      element.size.y
    );
  }

  _clearCanvas () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
