function Stage(data) {
    'use strict';

    if (!(this instanceof Stage)) {
        return new Stage(data);
    }

    this.items = [
        {
            type: 'rectangle',
            texture: 'leftwall',
            last: false,
            coordinates: {
                start: {
                    x: 0,
                    y: 0
                },
                size: {
                    x: 20,
                    y: 580
                }
            }
        },
        {
            type: 'rectangle',
            texture: false,
            last: false,
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
            texture: 'bottom',
            last: false,
            coordinates: {
                start: {
                    x: 0,
                    y: 580
                },
                size: {
                    x: 800,
                    y: 20
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'rightwall',
            last: false,
            coordinates: {
                start: {
                    x: 780,
                    y: 0
                },
                size: {
                    x: 20,
                    y: 580
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grassLeft',
            last: false,
            coordinates: {
                start: {
                    x: 120,
                    y: 60
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grassRight',
            last: false,
            coordinates: {
                start: {
                    x: 160,
                    y: 60
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'groundLeft',
            last: true,
            coordinates: {
                start: {
                    x: 120,
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
            texture: 'ground',
            last: false,
            coordinates: {
                start: {
                    x: 160,
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
            texture: 'groundSingle',
            last: true,
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
            texture: 'grassRight',
            last: true,
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
            texture: 'grassLeft',
            last: true,
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
            last: true,
            coordinates: {
                start: {
                    x: 280,
                    y: 60
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grassRight',
            last: true,
            coordinates: {
                start: {
                    x: 320,
                    y: 60
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grassLeft',
            last: true,
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
            last: true,
            coordinates: {
                start: {
                    x: 480,
                    y: 60
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grassRight',
            last: true,
            coordinates: {
                start: {
                    x: 520,
                    y: 60
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grassLeft',
            last: true,
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
            texture: 'grassLeft',
            last: false,
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
            texture: 'grassRight',
            last: false,
            coordinates: {
                start: {
                    x: 640,
                    y: 60
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'groundRight',
            last: true,
            coordinates: {
                start: {
                    x: 640,
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
            texture: 'ground',
            last: false,
            coordinates: {
                start: {
                    x: 600,
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
            texture: 'groundSingle',
            last: true,
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
            texture: 'grassSingle',
            last: false,
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
            texture: 'groundSingle',
            last: false,
            coordinates: {
                start: {
                    x: 120,
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
            texture: 'groundSingle',
            last: true,
            coordinates: {
                start: {
                    x: 120,
                    y: 300
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grassLeft',
            last: false,
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
            texture: 'groundLeft',
            last: true,
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
            texture: 'groundRight',
            last: true,
            coordinates: {
                start: {
                    x: 280,
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
            texture: 'grassLeft',
            last: false,
            coordinates: {
                start: {
                    x: 280,
                    y: 180
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grassRight',
            last: false,
            coordinates: {
                start: {
                    x: 320,
                    y: 180
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
            last: false,
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
            texture: 'groundRight',
            last: true,
            coordinates: {
                start: {
                    x: 320,
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
            texture: 'groundLeft',
            last: true,
            coordinates: {
                start: {
                    x: 440,
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
            last: false,
            coordinates: {
                start: {
                    x: 480,
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
            texture: 'grassLeft',
            last: false,
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
            texture: 'grassRight',
            last: false,
            coordinates: {
                start: {
                    x: 480,
                    y: 180
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grassRight',
            last: false,
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
            texture: 'groundRight',
            last: true,
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
            texture: 'groundLeft',
            last: true,
            coordinates: {
                start: {
                    x: 480,
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
            texture: 'grassSingle',
            last: false,
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
            texture: 'groundSingle',
            last: false,
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
            texture: 'groundSingle',
            last: true,
            coordinates: {
                start: {
                    x: 640,
                    y: 300
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grassSingle',
            last: false,
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
            texture: 'groundSingle',
            last: true,
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
            texture: 'grassLeft',
            last: true,
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
            texture: 'grassRight',
            last: true,
            coordinates: {
                start: {
                    x: 280,
                    y: 460
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grassLeft',
            last: true,
            coordinates: {
                start: {
                    x: 320,
                    y: 500
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
            last: true,
            coordinates: {
                start: {
                    x: 360,
                    y: 500
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
            last: true,
            coordinates: {
                start: {
                    x: 400,
                    y: 500
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grassRight',
            last: true,
            coordinates: {
                start: {
                    x: 440,
                    y: 500
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grassLeft',
            last: true,
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
            texture: 'grass',
            last: false,
            coordinates: {
                start: {
                    x: 380,
                    y: 340
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grassRight',
            last: true,
            coordinates: {
                start: {
                    x: 420,
                    y: 340
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'groundSingle',
            last: true,
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
            texture: 'grassLeft',
            last: true,
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
            texture: 'grassRight',
            last: true,
            coordinates: {
                start: {
                    x: 520,
                    y: 460
                },
                size: {
                    x: 40,
                    y: 40
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'grassSingle',
            last: false,
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
            texture: 'groundSingle',
            last: true,
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
    ];

}

Stage.prototype = {

};

exports.stageModel = Stage;