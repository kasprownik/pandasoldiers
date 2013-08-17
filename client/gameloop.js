var models = {
    players: [],
    stage: {},
    bullets: []
};


window.onload = function () {
    'use strict';
    var canvasNode = document.getElementById('game'),
        ctx = canvasNode.getContext('2d');

    var socket = io.connect('http://localhost:1338');


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