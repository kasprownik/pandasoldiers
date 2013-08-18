/* global io: true */

var config = {
    debug: true,
    stageWidth: 800,
    stageHeight: 600,
    music: false,
    shots: false
};

var models = {
    players: {},
    stage: [],
    bullets: {}
};

var playerCreated = false;

window.onload = function () {
    'use strict';

    window.canvasNode = document.getElementById('game');
    window.ctx = canvasNode.getContext('2d');

    var objects = [],
        socket = config.debug ? io.connect('http://localhost:8080') :
            io.connect('ws://pandasoldiers-cognifideninjas.rhcloud.com:8000');

    socket.on('objectCreated', function (data) {
        objects.push(data);
    });

    socket.emit('createLevel');
    socket.emit('loadPlayers');
    socket.emit('createPlayer');

    socket.on('createdLevel', function (data) {
        models.stage = data;
        drawStage(ctx);
        drawPlayers(ctx);
    });


    socket.on('createdPlayer', function (data) {
        if (!playerCreated) {
            window.playerID = data.id;
        }
        models.players[data.id] = data.player;
        objects.push(data.object);
        playerCreated = true;
    });

    socket.on('createdBullet', function (data) {
        models.bullets[data.object.id] = data.object;
        objects.push(data.object);
        drawBullets(ctx);
    });

    socket.on('loadedPlayers', function (data) {
        for (var player in data.players) {
            if (data.players.hasOwnProperty(player)) {
                var currentPlayer = data.players[player];
                models.players[currentPlayer.id] = currentPlayer;
            }
        }
        for (var object in data.objects) {
            if (data.objects.hasOwnProperty(object)) {
                var currentObject = data.objects[object];
                objects.push(currentObject);
            }
        }
    });

    socket.on('updatePosition', function (data) {
        if (models.players[data.id]) {
            models.players[data.id].y = data.position.y * 30;
            models.players[data.id].x = data.position.x * 30;
            models.players[data.id].angle = data.angle;
        }
        if (models.bullets[data.id]) {
            models.bullets[data.id].y = data.position.y * 30;
            models.bullets[data.id].x = data.position.x * 30;
            models.bullets[data.id].angle = data.angle;
        }
    });

    socket.on('disconnected', function (id) {
        delete models.players[id];
    });

    function render() {
        if (models.stage.length) {
            clearCanvas(ctx);
            drawStage(ctx);
            drawPlayers(ctx);
            drawDecoration(ctx);
            drawBullets(ctx);

            socket.emit('updateWorld');
            for (var player in models.players) {
                if (models.players.hasOwnProperty(player)) {
                    socket.emit('getObject', player);
                }
            }

            for (var bullet in models.bullets) {
                if (models.bullets.hasOwnProperty(bullet)) {
                    socket.emit('getObject', bullet);
                }
            }

        }
    }

    runInputCapturing(socket);
    runModelUpdating(socket);

    playMusic('client/audio/music.mp3', true);

    (function animloop() {
        window.requestAnimationFrame(animloop);
        render();
    })();
};