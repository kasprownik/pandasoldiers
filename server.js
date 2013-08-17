var express = require('express')
    , app = express()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server)
    , ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
    , physics = require('./server/physics.js').physics;


server.listen(8080, ipaddress);
console.warn(ipaddress);
app.use(express.static(__dirname + '/'));

var communication = require('./server/communication');

io.sockets.on('connection', function (socket) {
    'use strict';

    communication.init(io.sockets, socket);

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

require('./server/communication').module.init(server);