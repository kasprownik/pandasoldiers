function sendInput(socket, name, data) {
    socket.emit(name, data);
}

function runInputCapturing(socket) {

    var KEY = {
        UP: 38,
        LEFT: 37,
        RIGHT: 39
    };

    document.addEventListener('keyup', function (event) {

        switch (event.keyCode) {

            case KEY.UP:
                sendInput(socket, 'movePlayer', {action: "up"});
                break;

            case KEY.LEFT:
                sendInput(socket, 'movePlayer', {action: "left"});
                break;

            case KEY.RIGHT:
                sendInput(socket, 'movePlayer', {action: "right"});
                break;
        }

    }, false);

// mouse

    canvasNode.addEventListener('click', function (e) {
        var xOffset = parseInt(e.pageX - canvasNode.offsetLeft, 10);
        var yOffset = canvasNode.height - parseInt(e.pageY - canvasNode.offsetTop, 10);

        var angle = Math.atan2(yOffset, xOffset) * 180 / Math.PI;

        sendInput(socket, 'shot', {angle: angle });
        playShot();

    }, false);

}
