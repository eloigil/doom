'use strict';

class Player {
  constructor (canvas) {
    this.type = 'player';
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

    this._speed = 2;
    // @TODO this should be in trigonometric relationship with _speed for now x, y are 1
    this.speed = {
      x: this._speed * Math.cos(toRadians(this.angle)),
      y: this._speed * Math.sin(toRadians(this.angle)),
      z: 0
    };

    this.angle = 0;
    this._angularSpeed = 3;

    this.camera = new Camera(this.ctx, this.position, this.angle);
  }

  move (eventKeys) {
    const events = eventKeys;

    this._updatePosition(events);
    this._updateCameraPosition();
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

    this.speed.x = this._speed * Math.cos(toRadians(this.angle));
    this.speed.y = this._speed * Math.sin(toRadians(this.angle));
  }

  _updateCameraPosition () {
    this.camera.position = this.position;
    this.camera.angle = this.angle;
  }
}
