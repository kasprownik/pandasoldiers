/* global io: true */

var config = {
    debug: false
};

var models = {
    players: [],
    stage: {},
    bullets: []
};


window.onload = function () {
    'use strict';

    var canvasNode = document.getElementById('game'),
        ctx = canvasNode.getContext('2d');

    var socket = config.debug ? io.connect('http://localhost::8000') :
        io.connect('ws://pandasoldiers-cognifideninjas.rhcloud.com:8000');

    function render() {
        console.log('loop iteration begins');
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