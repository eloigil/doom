'use strict';

class KeyHandler {
  constructor (ctx, canvas) {
    this.keys = {
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
      this.keys.w = true;
      break;
    case 'd':
      this.keys.d = true;
      break;
    case 's':
      this.keys.s = true;
      break;
    case 'a':
      this.keys.a = true;
      break;
    }
  }

  _handleKeyUp (event) {
    switch (event.key) {
    case 'w':
      this.keys.w = false;
      break;
    case 'd':
      this.keys.d = false;
      break;
    case 's':
      this.keys.s = false;
      break;
    case 'a':
      this.keys.a = false;
      break;
    }
  }
}
