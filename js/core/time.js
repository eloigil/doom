class Time {
  constructor (gameCtx, callback) {
    this.intervalms = 10;
    this.interval = null;

    this.gameCtx = gameCtx;
    this.callback = callback;

    this.counter = 0;
    this._createInterval();
  }

  _createInterval () {
    const self = this;
    this.interval = window.setInterval(this._updateCounter.bind(this), self.intervalms);
  }

  _updateCounter () {
    this.counter++;
    // passing game ctx as a parameter as I don't know how to bind to the ctx where the cb is declared

    this.callback(this.gameCtx);
  }

  _stopInterval () {
    const self = this;
    window.clearInterval(self.interval);
  }
}
