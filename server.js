var express = require('express')
    , app = express()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server)
    , ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
    , physics = require('./server/physics.js').physics;

io.configure(function () {
    io.enable('browser client minification');  // send minified client
    io.enable('browser client etag');          // apply etag caching logic based on version number
    io.enable('browser client gzip');          // gzip the file
    io.set('log level', 5);                    // reduce logging
    io.set('transports', [
        'websocket'
    ]);

});

server.listen(8080, ipaddress);
console.warn(ipaddress);
app.use(express.static(__dirname + '/'));

io.sockets.on('connection', function (socket) {
    'use strict';

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

