exports.module = (function () {
    'use strict';
    var ps = require('../lib/pubsub');
    var uuid = require('../lib/uuid').uuid;
    return {
        init: function (server) {
            var module = this;

            var io = require('socket.io').listen(server),
                physics = require('../server/physics.js').physics;

            io.configure(function () {
                io.enable('browser client minification');  // send minified client
                io.enable('browser client etag');          // apply etag caching logic based on version number
                io.enable('browser client gzip');          // gzip the file
                io.set('log level', 1);                    // reduce logging
                io.set('transports', [
                    'websocket'
                ]);
            });

            physics.init();

            io.sockets.on('connection', function (socket) {
                var currentPlayer;

                socket.on('createStaticObject', function (data) {
                    var object = physics.createStaticObject(data);
                    io.sockets.emit('objectCreated', object);
                });

                socket.on('createDynamicObject', function (data) {
                    var object = physics.createDynamicObject(data);
                    io.sockets.emit('objectCreated', object);
                });

                socket.on('updateWorld', function () {
                    physics.updateWorld();
                });

                socket.on('getObject', function (id) {
                    var object = physics.getObject(id);

                    if (object) {
                        socket.emit('updatePosition', object);
                    }
                });

                socket.on('movePlayer', function (data) {
                    physics.moveItem(data);
                });

                socket.on('shot', function (data) {
                    var bullet = physics.createBullet(data.id, data.angle);
                    io.sockets.emit('createdBullet', bullet);
                });

                socket.on('createLevel', function () {
                    socket.emit('createdLevel', physics.createLevel());
                });

                socket.on('createPlayer', function () {
                    var player = physics.createPlayer(uuid());
                    currentPlayer = player.id;
                    io.sockets.emit('createdPlayer', player);
                });

                socket.on('loadPlayers', function () {
                    socket.emit('loadedPlayers', physics.getPlayers());
                });
                socket.on('disconnect', function () {
                    physics.removePlayer(currentPlayer);
                    io.sockets.emit('disconnected', currentPlayer);
                });
            });
        }
    };

})();