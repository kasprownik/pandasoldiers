exports.module = (function () {
    'use strict';
    var ps = require('../lib/pubsub');
    var uuid = require('../lib/uuid');
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


            io.sockets.on('connection', function (socket) {

                socket.on('createWorld', function () {
                    physics.init();
                });

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
                    if (physics.getObject(id)) {
                        socket.emit('updatePosition', physics.getObject(id));
                    }
                });
            });

            io.sockets.on('connection', function (socket) {
                module.bindConnection(io.sockets, socket);
            });
        },
        bindConnection: function (sockets, socket) {
            var playerId = uuid();

            ps.publish('createPlayer', playerId);

            socket.on('movePlayer', function (data) {
                ps.publish('movePlayer', {playerId: playerId, action: data.action});
            });

            socket.on('shot', function (data) {
                ps.publish('createBullet', {playerId: playerId, angle: data.action});
            });

            socket.on('disconnect', function () {
                ps.publish('removePlayer', {playerId: playerId});
            });
        }
    };

})();