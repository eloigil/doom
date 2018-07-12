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
    const leftEdge = -element.size.x / 2;
    const topEdge = -element.size.y / 2;

    this.ctx.save();

    this._setPointerToCenter(element.position);
    this._setRotation(element.angle);

    this.ctx.fillRect(
      leftEdge,
      topEdge,
      element.size.x,
      element.size.y
    );

    this.ctx.restore();
  }

  _setPointerToCenter (position) {
    this.ctx.translate(position.x, position.y);
  }

  _setRotation (angle, position) {
    this.ctx.rotate(this._toRadians(angle));
  }

  _toRadians (angle) {
    const angleInRadians = angle * 2 * Math.PI / 360;
    return angleInRadians;
  }

  _clearCanvas () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
