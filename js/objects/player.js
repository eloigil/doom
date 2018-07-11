'use strict';

class Player {
  constructor (canvas) {
    // player settings
    this.position = {
      x: 0,
      y: 0,
      z: 0
    };

    this.size = {
      x: 100,
      y: 20,
      z: 0
    };

    this._speed = 5;
    this.speed = {
      x: 0,
      y: 0,
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
  }

  move (eventKeys) {
    const events = eventKeys;
    this._updateSpeed(events);
    this._updatePosition(this._updateSpeed(events));
  }

  _updateSpeed (events) {
    // console.log(events);
    this.speed.y -= events.w ? this._speed : 0;
    this.speed.x += events.d ? this._speed : 0;
    this.speed.y += events.s ? this._speed : 0;
    this.speed.x -= events.a ? this._speed : 0;

    return this.speed;
  }

  _updatePosition (speed) {
    for (let axis in this.position) {
      this.position[axis] += this.speed[axis];
      // console.log(this.position[axis], this.speed[axis]);
    }
  }
}
