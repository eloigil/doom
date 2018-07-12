'use strict';

class Player {
  constructor (canvas) {
    // player settings
    this.position = {
      x: 200,
      y: 100,
      z: 0
    };

    this.size = {
      x: 30,
      y: 90,
      z: 0
    };

    this._speed = 1;
    // @TODO this should be in trigonometric relationship with _speed for now x, y are 1
    this.speed = {
      x: this._speed * Math.cos(this._toRadians(this.angle)),
      y: this._speed * Math.sin(this._toRadians(this.angle)),
      z: 0
    };

    this.view = {
      cameraId: null,
      placement: {
        x: 0,
        y: 0,
        z: 0
      }
    };

    this.angle = 0;
    this._angularSpeed = 3;
  }

  move (eventKeys) {
    const events = eventKeys;

    this._updatePosition(events);
  }

  _updatePosition (events) {
    this.position.x += (events.forwards ? this.speed.x : 0);
    this.position.y += (events.forwards ? this.speed.y : 0);

    this.position.x -= (events.rightwards ? this.speed.y : 0);
    this.position.y += (events.rightwards ? this.speed.x : 0);

    this.position.x -= (events.backwards ? this.speed.x : 0);
    this.position.y -= (events.backwards ? this.speed.y : 0);

    this.position.x += (events.leftwards ? this.speed.y : 0);
    this.position.y -= (events.leftwards ? this.speed.x : 0);

    // update angle also
    this.angle += (events.turnRight ? this._angularSpeed : 0);
    this.angle -= (events.turnLeft ? this._angularSpeed : 0);

    this.speed.x = this._speed * Math.cos(this._toRadians(this.angle));
    this.speed.y = this._speed * Math.sin(this._toRadians(this.angle));
  }

  _toRadians (angle) {
    const angleInRadians = angle * 2 * Math.PI / 360;
    return angleInRadians;
  }
}
