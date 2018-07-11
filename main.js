'use strict';

function main () {
  var game;
  var container = document.getElementById('container');
  var canvas = document.getElementById('canvas');
  game = new Game(canvas, container.clientWidth, container.clientWidth / 1.77);

  window.addEventListener('resize', function () {
    game._resize(container.clientWidth, container.clientWidth / 1.77);
  });
}

window.addEventListener('load', main);
