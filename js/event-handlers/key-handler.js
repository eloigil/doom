'use strict';

class KeyHandler {
  constructor (ctx, canvas) {
    this.keyStatus = {
      forwards: false,
      rightwards: false,
      backwards: false,
      leftwards: false
    };

    this._addKeyDownEvent();
    this._addKeyUpEvent();
  }

  _addKeyDownEvent () {
    window.addEventListener('keydown', this._handleKeyDown.bind(this));
  }

  _addKeyUpEvent () {
    window.addEventListener('keyup', this._handleKeyUp.bind(this));
  }

  _handleKeyDown (event) {
    switch (event.key) {
    case 'w':
      this.keyStatus.forwards = true;
      break;
    case 'e':
      this.keyStatus.rightwards = true;
      break;
    case 's':
      this.keyStatus.backwards = true;
      break;
    case 'q':
      this.keyStatus.leftwards = true;
      break;
    }
  }

  _handleKeyUp (event) {
    switch (event.key) {
    case 'w':
      this.keyStatus.forwards = false;
      break;
    case 'e':
      this.keyStatus.rightwards = false;
      break;
    case 's':
      this.keyStatus.backwards = false;
      break;
    case 'q':
      this.keyStatus.leftwards = false;
      break;
    }
  }
}
