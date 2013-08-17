/* global io: true */

var config = {
    debug: true
};

var models = {
    players: [],
    stage: {},
    bullets: []
};

window.onload = function () {
    'use strict';

    window.canvasNode = document.getElementById('game');
    window.ctx = canvasNode.getContext('2d');

    var socket = config.debug ? io.connect('http://localhost::8000') :
        io.connect('ws://pandasoldiers-cognifideninjas.rhcloud.com:8000');

    function render() {
        
        clearCanvas(ctx);
        drawStage(ctx);
        drawPlayers(ctx);
        moveBullets(ctx);
        drawBullets(ctx);
    }

    runInputCapturing(socket);
    runModelUpdating(socket);

    (function animloop() {
        window.requestAnimationFrame(animloop);
        render();
    })();
};