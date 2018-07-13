'use strict';

class EnvironmentBox {
  constructor (size, x, y, z) {
    this.type = 'environmentBox';
    this.position = {
      x: x,
      y: y,
      z: z
    };

    this.size = size;
  }
}
