'use strict';

class Game {
  constructor (canvas, width, height) {
    // canvas parameters
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = width;
    this.height = height;

    // time
    this.time = null;
    this.timeCounter = 0;

    // renderer settings
    this.DefaultRenderEngine = RenderEngine;
    this.renderEngine = null;

    // key handler
    this.keyHandler = null;

    // players settings
    this.playersNumber = 1;
    this.players = [];

    // environmentBox settings
    this.boxSize = this.width / 25;
    this.environmentBoxes = [];

    // camera settings
    this.cameras = [];

    this._init();
  }

  _resize (width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.width = width;
    this.height = height;
  };

  _setRenderEngine (renderEngine) {
    this.renderEngine = renderEngine || new this.DefaultRenderEngine(this.ctx, this.canvas);
  }

  _createEventHandlers () {
    this.keyHandler = new KeyHandler();
  }

  _createElements () {
    this._createPlayers();
    this._createEnvironment();
  }

  _createPlayers () {
    // creates all new players
    for (let ix = 0; ix < this.playersNumber; ix++) {
      this.players.push(new Player());
      this.cameras.push(this.players[ix].camera);
    }

    // updates renderelements
    this.renderEngine.renderElements['players'] = this.players;
    this.renderEngine.renderElements['cameras'] = this.cameras;
  }

  _createEnvironment () {
    for (let jx = 0; jx <= this.height; jx += this.boxSize) {
      let increase = (jx === 0 || jx >= this.height - this.boxSize) ? this.boxSize : this.width;
      for (let ix = 0; ix <= this.width + this.boxSize; ix += increase) {
        this._createEnvironmentBox(this.boxSize, ix, jx);
      }
    }
  }

  _createEnvironmentBox (size, x, y) {
    this.environmentBoxes.push(new EnvironmentBox(size, x, y));

    this.renderEngine.renderElements['environmentBoxes'] = this.environmentBoxes;
  }

  _init () {
    this._resize(this.width, this.height);
    this._setRenderEngine();
    this._createElements();
    this._createEventHandlers();
    this.time = new Time(this, this.timeFrame);

    this.renderEngine.frame();
  }

  timeFrame (ctx) {
    const self = ctx;
    // here it goes all the movement updates
    self.players.forEach(player => {
      player.move(self.keyHandler.keyStatus);
    });
  }
}
