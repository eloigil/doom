'use strict';

class Player {
  constructor (canvas) {
    this.position = {
      x: 0,
      y: 0,
      z: 0
    };

    this.size = {
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
}
