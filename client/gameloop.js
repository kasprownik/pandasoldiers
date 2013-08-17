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
            "type": "rectangle",
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
            "type": "rectangle",
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

    window.canvasNode = document.getElementById('game');
    window.ctx = canvasNode.getContext('2d');

    var world = false,
        objects = [],
        socket = config.debug ? io.connect('http://localhost:8080') :
            io.connect('ws://pandasoldiers-cognifideninjas.rhcloud.com:8000');

    socket.on('objectCreated', function (data) {
        console.log(data);
        objects.push(data);
    });

    socket.emit('createWorld');

    socket.emit('createDynamicObject', {
        x: 5,
        y: 5,
        width: 10,
        height: 3,
        id: 1
    });

    socket.on('updatePosition', function (data) {
        // console.log(data.position.y);
    });

    function render() {
        clearCanvas(ctx);
        drawStage(ctx);
        drawPlayers(ctx);
        moveBullets(ctx);
        drawBullets(ctx);
        //     console.log('loop iteration begins');
        //     clearCanvas(ctx);
        //     drawStage(ctx);
        //     drawPlayers(ctx);
        //     moveBullets(ctx);
        //     drawBullets(ctx);

        //       console.log(objects);
        socket.emit('updateWorld');
        socket.emit('getObject', 1);
    }

    runInputCapturing(socket);
    runModelUpdating(socket);

    (function animloop() {
        window.requestAnimationFrame(animloop);
        render();
    })();
};