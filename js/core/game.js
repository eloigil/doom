'use strict';

class Game {
  constructor (canvas, width, height) {
    // canvas parameters
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = width;
    this.height = height;

    // renderer settings
    this.DefaultRenderEngine = RenderEngine;
    this.renderEngine = null;

    // key handler
    this.keyHandler = null;

    // players settings
    this.playersNumber = 1;
    this.players = [];

    this._init();
  }

  _init () {
    this._resize(this.width, this.height);
    this._setRenderEngine();
    this._createPlayers();

    this.keyHandler = new KeyHandler();
    this.renderEngine.frame();
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

  _createPlayers () {
    // creates all new players
    for (let ix = 0; ix < this.playersNumber; ix++) {
      this.players.push(new Player());
    }

    // updates renderelements
    this.renderEngine.renderElements['players'] = this.players;
  }
}