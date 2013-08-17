function sendInput(socket, data) {

    socket.emit('movePlayer', data);
        // console.log(data);
}

function runInputCapturing(socket) {

    var KEY = {
        UP: 38,
        LEFT: 37,
        RIGHT: 39
    };

document.addEventListener('keyup', function(event) {

    switch(event.keyCode) {

        case KEY.UP:
            sendInput(socket,{action:"up"});
            break;

        case KEY.LEFT:
            sendInput(socket,{action:"left"});
            break;

        case KEY.RIGHT:
            sendInput(socket,{action:"right"});
            break;
    }

}, false);

// mouse

    canvasNode.addEventListener('click', function(e) {
        sendInput(socket,{
            x:e.pageX,
            y:e.pageY
        });

        var xOffset  = e.pageX - canvasNode.offsetLeft;
        var yOffset  = e.pageY - canvasNode.offsetTop;

        console.log("xoff " + xOffset);
        console.log("yoff " + yOffset);

	}, false);


    // shot: angle (rad);
}
