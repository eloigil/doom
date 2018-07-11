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
      x: 30,
      y: 90,
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

    this.angle = -90;
  }

  move (eventKeys) {
    const events = eventKeys;

    this._updatePosition(events);
  }

  _updatePosition (events) {
    this.position.x += (events.forwards ? this.speed.y : 0);
    this.position.y += (events.rightwards ? this.speed.x : 0);
    this.position.x -= (events.backwards ? this.speed.x : 0);
    this.position.y -= (events.leftwards ? this.speed.y : 0);
  }
}
