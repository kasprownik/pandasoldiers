/* global io: true */

var config = {
    debug: true
};

var models = {
    players: [
    {
        "x": 100,
        "y": 100,
        "name": "john",
        "life": 1
    },
    {
        "x": 200,
        "y": 130,
        "name": "merry",
        "life": 3
    }
    ],
    stage: [
    {
        "type" : "rectangle",
        "coordinates": {
            "start": {
                "x": 188, 
                "y": 50  
            },
            "end": {
                "x": 200, 
                "y": 100
            }
        }
    },
    {
        "type" : "rectangle",
        "coordinates": {
            "start": {
                "x": 18, 
                "y": 50  
            },
            "end": {
                "x": 80, 
                "y": 90
            }
        }
    }
    ],
    bullets: []
};


window.onload = function () {
    'use strict';

    var canvasNode = document.getElementById('game'),
    ctx = canvasNode.getContext('2d');

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