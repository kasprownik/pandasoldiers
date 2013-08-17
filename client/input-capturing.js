function sendInput(socket, data) {

  socket.emit('player_move', data);
  // console.log(data);
  // console.log(socket);

}

function runInputCapturing(socket) {

    var KEY = {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
    };

document.addEventListener('keyup', function(event) {

    switch(event.keyCode) {

        case KEY.UP:
            sendInput(socket,{key:KEY.UP});
            break;

        case KEY.DOWN:
            sendInput(socket,{key:KEY.DOWN});
            break;

        case KEY.LEFT:
            sendInput(socket,{key:KEY.LEFT});
            break;

        case KEY.RIGHT:
            sendInput(socket,{key:KEY.RIGHT});
            break;

        default:
            console.log('default');
            break;
    }

}, false);

// mouse
	canvasNode.addEventListener('click', function(e) {
        sendInput(socket,{
            x:e.pageX,
            y:e.pageY
        });
	}, false);
}
