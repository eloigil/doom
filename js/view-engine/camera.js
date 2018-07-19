'use strict';

class Camera {
  constructor (ctx, position, angle) {
    this.type = 'camera';
    this.ctx = ctx;

    this.cameraId = null;

    this.position = position;
    this.angle = toRadians(angle);

    this.viewRange = 120;
  }

  _createRay () {

  }
}
