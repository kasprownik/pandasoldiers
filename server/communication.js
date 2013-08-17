exports.module = (function () {
    'use strict';
    var ps = require('../lib/pubsub');
    return {
        init: function (server) {
            var module = this;

            var io = require('socket.io').listen(server);

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
                module.bindConnection(io.sockets, socket);
            });
        },
        bindConnection: function (sockets, socket) {
            ps.publish('createPlayer');
        }
    };

})();