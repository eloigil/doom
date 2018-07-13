'use strict';

class Camera {
  constructor (ctx, position, angle) {
    this.type = 'camera';
    this.ctx = ctx;

    this.cameraId = null;

    this.position = position;
    this.angle = angle;

    this.viewRange = 120;
  }

  _toRadians (angle) {
    const angleInRadians = angle * 2 * Math.PI / 360;
    return angleInRadians;
  }

  _generateRay () {

  }
}
