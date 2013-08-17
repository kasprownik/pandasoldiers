var express = require("express");
var site = express();

site.use(express.static(__dirname + '/'));
site.use(express.favicon("./favicon.ico"));

var io = require('socket.io').listen(1338);

io.sockets.on('connection', function (socket) {
    //blah blah
});

site.listen(1337);

console.log("File server listening on http://localhost:1337");
console.log("WebSockets server listening on http://localhost:1338");