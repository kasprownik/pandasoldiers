exports.module = (function () {
    'use strict';
    var _ = require('../lib/lodash');
    var uuid = require('../lib/uuid').uuid;
    return {
        init: function (server) {

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
                var worldTimer = setInterval(function () {
                 physics.updateWorld();
                },16);

            io.sockets.on('connection', function (socket) {
                var currentPlayer;

                if (_.size(physics.getData().players) >= 4) {

                    socket.emit('userLimit');

                } else {

                    socket.on('createStaticObject', function (data) {
                        var object = physics.createStaticObject(data);
                        io.sockets.emit('objectCreated', object);
                    });

                    socket.on('createDynamicObject', function (data) {
                        var object = physics.createDynamicObject(data);
                        io.sockets.emit('objectCreated', object);
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
                    var positionTimer;
                    socket.on('createPlayer', function (name) {
                        console.log('name');
                        var player = physics.createPlayer(uuid());
                        currentPlayer = player.id;
                        player.player.name = name;
                        io.sockets.emit('createdPlayer', player);

                        if (positionTimer) {
                            clearInterval(positionTimer);
                        }

                        positionTimer = setInterval(function () {
                            var data = physics.getData();
                            _.each(data.players, function (player) {
                                io.sockets.emit('updatePosition', {player: data.objects[player.id], playerModel: player, id: player.id});
                                if (player.life <= 0) {
                                    io.sockets.emit('killPlayer', player.id);
                                }
                            });
                            _.each(data.bullets, function (bullet) {
                                io.sockets.emit('updatePosition', data.bullets[bullet.id]);
                                if (data.bullets[bullet.id].kill) {
                                    physics.removeBullet(bullet.id);
                                    io.sockets.emit('removedBullet', bullet.id);
                                }
                            });
                        }, 16);

                    });

                    socket.on('loadPlayers', function () {
                        socket.emit('loadedPlayers', physics.getPlayers());
                    });

                    socket.on('disconnect', function () {
                        physics.removePlayer(currentPlayer);
                        console.log('connection lost', currentPlayer);
                        io.sockets.emit('disconnected', currentPlayer);
                    });

                    socket.on('killedPlayer', function (id) {
                        var respawnPlayer;
			if (physics.getPlayers().players[id]) {
                            var name = physics.getPlayers().players[id].name;
                        } else {
                            var name ='name';
                        }
                        physics.removePlayer(id);
                        respawnPlayer = physics.createPlayer(id);
                        respawnPlayer.player.name = name;
                        io.sockets.emit('createdPlayer', respawnPlayer);
                    });
                }

            });
        }
    };

})();
