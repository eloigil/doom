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

    this._speed = 1;
    // @TODO this should be in trigonometric relationship with _speed for now x, y are 1
    this.speed = {
      x: 1,
      y: 1,
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
    // this._updatePosition(events);
  }

  _updateSpeed (events) {
    this.position.y -= (events.w ? this.speed.y : 0);
    this.position.x += (events.d ? this.speed.x : 0);
    this.position.y += (events.s ? this.speed.x : 0);
    this.position.x -= (events.a ? this.speed.y : 0);
    console.log(this.position);
  }

  // _updatePosition (speed) {
  //   for (let axis in this.position) {
  //     this.position[axis] += this.speed[axis];
  //     console.log(this.position[axis], this.speed[axis]);
  //   }
  // }
}
