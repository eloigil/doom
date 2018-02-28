'use strict';

var game;

function init() {

    var container = document.getElementById('container');
    var canvas = document.getElementById('canvas');
    game = new Game(canvas, container.clientWidth, container.clientWidth / 1.77);

    window.addEventListener('resize', function () {
        game.resize(container.clientWidth, container.clientWidth / 1.77);
    });

}


document.addEventListener('DOMContentLoaded', init);