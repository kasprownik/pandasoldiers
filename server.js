var express = require('express')
    , app = express()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server)
    , ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

io.configure(function () {
    io.enable('browser client minification');  // send minified client
    io.enable('browser client etag');          // apply etag caching logic based on version number
    io.enable('browser client gzip');          // gzip the file
    io.set('log level', 1);                    // reduce logging
    io.set('transports', [
        'websocket'
    ]);

});

server.listen(8080, ipaddress);
console.warn(ipaddress);
app.use(express.static(__dirname + '/'));

var communication = require('./server/communication');

io.sockets.on('connection', function (socket) {
    communication.init(io.sockets, socket);
io.sockets.on('connection', function (socket) {    
    socket.emit('news', { hello: 'world' });
    socket.on('player_move', function (data) {
        console.log(data);        
    });
});