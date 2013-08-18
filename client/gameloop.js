/* global io: true */

var config = {
    debug: false,
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

function startGame() {
    'use strict';


    window.canvasNode = document.getElementById('game');
    window.ctx = canvasNode.getContext('2d');

    var objects = [],
        socket = config.debug ? io.connect('ws://109.173.132.201') :
            io.connect('ws://pandasoldierssc-cognifideninjas.rhcloud.com:8000');

    socket.on('objectCreated', function (data) {
        objects.push(data);
    });

    socket.emit('createLevel');
    socket.emit('loadPlayers');
    socket.emit('createPlayer', playerName);

    socket.on('createdLevel', function (data) {
        models.stage = data;
        drawStage(ctx);
        drawPlayers(ctx);
    });

    socket.on('userLimit', function () {
        alert('Maximum user number has been reached. Try again later.');
    });


    socket.on('createdPlayer', function (data) {
        if (!playerCreated) {
            window.playerID = data.id;
        }
        models.players[data.id] = data.player;
        objects.push(data.object);
        playerCreated = true;
        preparePlayerTextures();
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

        preparePlayerTextures();
    });

    socket.on('updatePosition', function (data) {

        if (models.players[data.id]) {
            models.players[data.id].y = data.player.position.y * 30;
            models.players[data.id].x = data.player.position.x * 30;
            models.players[data.id].life = data.playerModel.life;
            models.players[data.id].angle = data.player.angle;
            models.players[data.id].face = data.player.face;
            models.players[data.id].name = data.playerModel.name;
        } else if (models.bullets[data.id]) {

            models.bullets[data.id].y = data.position.y * 30;
            models.bullets[data.id].x = data.position.x * 30;
            models.bullets[data.id].angle = data.angle;
        }
    });

    socket.on('removedBullet', function (id) {
        delete models.bullets[id];
    });


    socket.on('disconnected', function (id) {
        delete models.players[id];
    });

    socket.on('killPlayer', function (id) {
        delete models.players[id];
        socket.emit('killedPlayer', id);
    });

    function render() {
        if (models.stage.length) {
            clearCanvas(ctx);
            drawStage(ctx);
            drawPlayers(ctx);
            drawDecoration(ctx);
            drawBullets(ctx);
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
