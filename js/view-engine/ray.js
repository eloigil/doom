'use strict';

class Ray {
  constructor (ctx, position, angle) {
    this.startPosition = position;
    this.position = position;
    this.angle = angle;

    this.speed = {
      x: this._speed * Math.cos(toRadians(this.angle)),
      y: this._speed * Math.sin(toRadians(this.angle)),
      z: 0
    };

    this.distance = 0;
  }

  _update () {
    this._updatePosition();

    this._update();
  }

  _updatePosition () {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }

  _updateDistance () {
    this.distance = Math.sqrt(Math.pow(this.position.x - this.startPosition.x) + Math.pow(this.position.y - this.startPosition.y));
  }
}
