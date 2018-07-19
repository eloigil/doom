'use strict';

class Ray {
  constructor (ctx, position, angle) {
    this.angle = angle;
    this.position = position;
    this.angle = angle;

    this.speed = {
      x: this._speed * Math.cos(toRadians(this.angle)),
      y: this._speed * Math.sin(toRadians(this.angle)),
      z: 0
    };

    this.rays = [];
    this.currentRayAngle = angle;
  }

  _update () {
    this._updatePosition();
    this._update();
  }

  _updatePosition () {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }
}
