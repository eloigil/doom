class Time {
  constructor () {
    this.intervalms = 10;
    this.intervalId = null;

    this.counter = 0;
  }

  _createInterval () {
    this.intervalId = window.setInterval(this._updateCounter, this.intervalms);
  }

  _updateCounter () {}
}
