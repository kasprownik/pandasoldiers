/* global io: true */

var config = {
    debug: true,
    stageWidth: 800,
    stageHeight: 600
};

var models = {
    players: [
        {
            x: 32,
            y: 32,
            name: 'john',
            life: 100
        },
        {
            x: 32,
            y: 32,
            name: 'merry',
            life: 30
        }
    ],
    stage: [
        {
            type: 'rectangle',
            texture: 'wall',
            coordinates: {
                start: {
                    x: 0,
                    y: 0
                },
                size: {
                    x: 20,
                    y: 600
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'wall',
            coordinates: {
                start: {
                    x: 20,
                    y: 0
                },
                size: {
                    x: 780,
                    y: 20
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grass',
            coordinates: {
                start: {
                    x: 20,
                    y: 580
                },
                size: {
                    x: 760,
                    y: 20
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'wall',
            coordinates: {
                start: {
                    x: 780,
                    y: 20
                },
                size: {
                    x: 20,
                    y: 580
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grass',
            coordinates: {
                start: {
                    x: 120,
                    y: 60
                },
                size: {
                    x: 80,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'ground',
            coordinates: {
                start: {
                    x: 120,
                    y: 100
                },
                size: {
                    x: 80,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'ground',
            coordinates: {
                start: {
                    x: 160,
                    y: 140
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grass',
            coordinates: {
                start: {
                    x: 200,
                    y: 100
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grass',
            coordinates: {
                start: {
                    x: 240,
                    y: 60
                },
                size: {
                    x: 120,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grass',
            coordinates: {
                start: {
                    x: 440,
                    y: 60
                },
                size: {
                    x: 120,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grass',
            coordinates: {
                start: {
                    x: 560,
                    y: 100
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grass',
            coordinates: {
                start: {
                    x: 600,
                    y: 60
                },
                size: {
                    x: 80,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'ground',
            coordinates: {
                start: {
                    x: 600,
                    y: 100
                },
                size: {
                    x: 80,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'ground',
            coordinates: {
                start: {
                    x: 600,
                    y: 140
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grass',
            coordinates: {
                start: {
                    x: 120,
                    y: 220
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'ground',
            coordinates: {
                start: {
                    x: 120,
                    y: 260
                },
                size: {
                    x: 40,
                    y: 80
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grass',
            coordinates: {
                start: {
                    x: 240,
                    y: 220
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'ground',
            coordinates: {
                start: {
                    x: 240,
                    y: 260
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grass',
            coordinates: {
                start: {
                    x: 280,
                    y: 180
                },
                size: {
                    x: 80,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'ground',
            coordinates: {
                start: {
                    x: 280,
                    y: 220
                },
                size: {
                    x: 80,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'ground',
            coordinates: {
                start: {
                    x: 440,
                    y: 220
                },
                size: {
                    x: 80,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grass',
            coordinates: {
                start: {
                    x: 440,
                    y: 180
                },
                size: {
                    x: 80,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grass',
            coordinates: {
                start: {
                    x: 520,
                    y: 220
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'ground',
            coordinates: {
                start: {
                    x: 520,
                    y: 260
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grass',
            coordinates: {
                start: {
                    x: 640,
                    y: 220
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'ground',
            coordinates: {
                start: {
                    x: 640,
                    y: 260
                },
                size: {
                    x: 40,
                    y: 80
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grass',
            coordinates: {
                start: {
                    x: 200,
                    y: 380
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'ground',
            coordinates: {
                start: {
                    x: 200,
                    y: 420
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grass',
            coordinates: {
                start: {
                    x: 240,
                    y: 460
                },
                size: {
                    x: 80,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grass',
            coordinates: {
                start: {
                    x: 320,
                    y: 500
                },
                size: {
                    x: 160,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grass',
            coordinates: {
                start: {
                    x: 340,
                    y: 340
                },
                size: {
                    x: 120,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'ground',
            coordinates: {
                start: {
                    x: 380,
                    y: 380
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grass',
            coordinates: {
                start: {
                    x: 480,
                    y: 460
                },
                size: {
                    x: 80,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grass',
            coordinates: {
                start: {
                    x: 560,
                    y: 380
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'ground',
            coordinates: {
                start: {
                    x: 560,
                    y: 420
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        }


    ],
    bullets: []
};

window.onload = function () {
    'use strict';

    window.canvasNode = document.getElementById('game');
    window.ctx = canvasNode.getContext('2d');

    var world = false,
        objects = [],
        socket = config.debug ? io.connect('http://localhost:8080') :
            io.connect('ws://pandasoldiers-cognifideninjas.rhcloud.com:8000');

    socket.on('objectCreated', function (data) {
        console.log(data);
        objects.push(data);
    });

    socket.emit('createWorld');

    socket.emit('createDynamicObject', {
        x: 5,
        y: 5,
        width: 10,
        height: 3,
        id: 1
    });

    socket.on('updatePosition', function (data) {
        // console.log(data.position.y);
    });

    function render() {
        clearCanvas(ctx);
        drawStage(ctx);
        drawPlayers(ctx);
        drawDecoration(ctx);
        moveBullets(ctx);
        drawBullets(ctx);
        //     console.log('loop iteration begins');
        //     clearCanvas(ctx);
        //     drawStage(ctx);
        //     drawPlayers(ctx);
        //     moveBullets(ctx);
        //     drawBullets(ctx);

        //       console.log(objects);
        socket.emit('updateWorld');
        socket.emit('getObject', 1);
    }

    runInputCapturing(socket);
    runModelUpdating(socket);

    playMusic('client/audio/music.mp3', true);

    (function animloop() {
        window.requestAnimationFrame(animloop);
        render();
    })();
};