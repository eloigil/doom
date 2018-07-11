'use strict';

class KeyHandler {
  constructor (ctx, canvas) {
    this.keyStatus = {
      w: false,
      d: false,
      s: false,
      a: false
    };

    this._addKeyDownEvent();
    this._addKeyUpEvent();
  }

  _addKeyDownEvent () {
    window.addEventListener('keydown', this._handleKeyDown.bind(this));
  }

  _addKeyUpEvent () {
    window.addEventListener('keydown', this._handleKeyUp.bind(this));
  }

  _handleKeyDown (event) {
    switch (event.key) {
    case 'w':
      this.keyStatus.w = true;
      break;
    case 'd':
      this.keyStatus.d = true;
      break;
    case 's':
      this.keyStatus.s = true;
      break;
    case 'a':
      this.keyStatus.a = true;
      break;
    }
  }

  _handleKeyUp (event) {
    switch (event.key) {
    case 'w':
      this.keyStatus.w = false;
      break;
    case 'd':
      this.keyStatus.d = false;
      break;
    case 's':
      this.keyStatus.s = false;
      break;
    case 'a':
      this.keyStatus.a = false;
      break;
    }
  }
}
