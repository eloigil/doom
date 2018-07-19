'use strict';

class RenderEngine {
  constructor (ctx, canvas) {
    // canvas parameters
    this.ctx = ctx;
    this.canvas = canvas;

    this.renderElements = {};
  }

  frame () {
    this._clearCanvas();
    this._draw();
    window.requestAnimationFrame(() => this.frame());
  }

  _draw () {
    for (let elements in this.renderElements) {
      this.renderElements[elements].forEach(element => {
        switch (element.type) {
        case 'player':
          this._drawPlayer(element);
          break;
        case 'environmentBox':
          this._drawEnvironmentBox(element);
          break;
        case 'camera':
          this._drawCamera(element);
          break;
        }
      });
    }
  };

  _drawPlayer (element) {
    // drawing from the position center of the element
    const leftEdge = -element.size.x / 2;
    const topEdge = -element.size.y / 2;

    this.ctx.save();

    this._setPointerToCenter(element.position);
    this._setRotation(element.angle);

    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(
      leftEdge,
      topEdge,
      element.size.x,
      element.size.y
    );

    this.ctx.restore();
  }

  _drawEnvironmentBox (element) {
    // drawing from the position center of the element
    const leftEdge = -element.size / 2;
    const topEdge = -element.size / 2;

    this.ctx.save();

    this._setPointerToCenter(element.position);
    this._setRotation(element.angle);

    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(
      leftEdge,
      topEdge,
      element.size,
      element.size
    );

    this.ctx.restore();
  }

  _drawCamera (element) {
    this.ctx.beginPath();
    this.ctx.moveTo(element.position.x, element.position.y);
    this.ctx.lineTo(element.position.x + 1000 * Math.cos(toRadians(element.angle - element.viewRange / 2)), element.position.y + 1000 * Math.sin(toRadians(element.angle - element.viewRange / 2)));
    this.ctx.stroke();

    this.ctx.moveTo(element.position.x, element.position.y);
    this.ctx.lineTo(element.position.x + 1000 * Math.cos(toRadians(element.angle + element.viewRange / 2)), element.position.y + 1000 * Math.sin(toRadians(element.angle + element.viewRange / 2)));
    this.ctx.stroke();
  }

  _setPointerToCenter (position) {
    this.ctx.translate(position.x, position.y);
  }

  _setRotation (angle, position) {
    this.ctx.rotate(toRadians(angle));
  }

  _clearCanvas () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  _toRadians (angle) {
    const angleInRadians = angle * 2 * Math.PI / 360;
    return angleInRadians;
  }
}
