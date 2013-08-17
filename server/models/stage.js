function Stage(data) {
    'use strict';

    if (!(this instanceof Stage)) {
        return new Stage(data);
    }

    this.items = [
        {
            type: 'rectangle',
            texture: 'something',
            coordinates: {
                start: {
                    x: 188,
                    y: 50
                },
                end: {
                    x: 200,
                    y: 100
                }
            }
        },
        {
            type: 'rectangle',
            texture: 'something',
            coordinates: {
                start: {
                    x: 18,
                    y: 50
                },
                end: {
                    x: 80,
                    y: 90
                }
            }
        }
    ];

}

Stage.prototype = {

};

exports.stageModel = Stage;