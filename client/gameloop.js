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

    var world = false,
        objects = [];

    //   var canvasNode = document.getElementById('game'),
    //       ctx = canvasNode.getContext('2d');

    var socket = config.debug ? io.connect('http://127.0.0.1:8080') :
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
        console.log(data.position.y);
    });

    function render() {
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