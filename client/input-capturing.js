var keyupCheck = false;

function sendInput(socket, name, data) {

    'use strict';

    socket.emit(name, data);
    console.log(keyupCheck);
}

function runInputCapturing(socket) {

    'use strict';

    var KEY = {
        UP: 38,
        LEFT: 37,
        RIGHT: 39
    };

    document.addEventListener('keydown', function (event) {

        switch (event.keyCode) {

            case KEY.UP:
                if(!keyupCheck){
                sendInput(socket, 'movePlayer', {action: "up", id: window.playerID});
                    keyupCheck = true;
                }
                break;

            case KEY.LEFT:
                sendInput(socket, 'movePlayer', {action: "left", id: window.playerID});
                break;

            case KEY.RIGHT:
                sendInput(socket, 'movePlayer', {action: "right", id: window.playerID});
                break;
        }

    }, false);

    document.addEventListener('keyup', function (event) {

        switch (event.keyCode) {
            case KEY.UP:
                keyupCheck = false;
                break;
        }

    }, false);


// mouse click

    canvasNode.addEventListener('click', function (e) {

        var playerX = models.players[playerID].x;
        var playerY = models.players[playerID].y;

        var cursorX = parseInt(e.pageX - canvasNode.offsetLeft, 10);
        var cursorY = parseInt(e.pageY - canvasNode.offsetTop, 10);

        var x = cursorX - playerX;
        var y = cursorY - playerY;


        var angle = Math.atan2(y, x) * 180 / Math.PI;

        angle = angle < 0 ? 360 + angle : angle;

        sendInput(socket, 'shot', {id: window.playerID, angle: angle });
        playShot();

    }, false);

}

