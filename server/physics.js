var box2D = require('./../lib/box2d.js').Box2D
    , stage = require('./stage.js').stage
    , world = require('./world.js').world
    , bulletModel = require('./models/bullet.js').bulletModel
    , playerModel = require('./models/player.js').playerModel
    , stageModel = require('./models/stage.js').stageModel
    , b2Body = box2D.Dynamics.b2Body
    , ps = require('../lib/pubsub.js');


var physics = {};

physics.init = function () {
    'use strict';

    world.spawn();
    physics.events();

};

physics.events = function () {
    'use strict';

    ps.subscribe('createPlayer', physics.createPlayer);
    ps.subscribe('movePlayer', physics.movePlayer);
    ps.subscribe('shot', physics.createBullet);
    ps.subscribe('disconnect', physics.removePlayer);
};

physics.createStaticObject = function (data) {
    'use strict';

    return world.createObject(data.width, data.height, data.x, data.y, b2Body.b2_staticBody, data.id);

};

physics.createDynamicObject = function (data) {
    'use strict';

    return world.createObject(data.width, data.height, data.x, data.y, b2Body.b2_dynamicBody, data.id);

};

physics.updateWorld = function () {
    'use strict';
    if (world.current.Step) {
        world.current.Step(
            1 / 60,   //frame-rate
            8,       //velocity iterations
            3       //position iterations
        );
        world.current.ClearForces();
    }
};

physics.getObject = function (id) {
    'use strict';

    return world.objects[id];
};

physics.createPlayer = function (data) {
    'use strict';

    var playerID = data.playerID;

    console.log('createPlayer');

   // return world.createObject(data.width, data.height, data.x, data.y, b2Body.b2_dynamicBody, data.id);
};

physics.movePlayer = function (data) {
    'use strict';

    var playerID = data.playerID,
        action = data.action;

    console.log('movePlayer');
};

physics.removePlayer = function (data) {
    'use strict';

    var playerID = data.playerID;

    console.log('removePlayer');
};


physics.createBullet = function (data) {
    'use strict';

    var playerID = data.playerID;

    console.log('createBullet');

};

physics.updatePlayer = function (data) {
    'use strict';

    var playerID = data.playerID,
        position = data.position;

    console.log('updatePlayer');
};

physics.updateBullet = function (data) {
    'use strict';

    var playerID = data.playerID,
        position = data.position;

    console.log('updateBullet');
};


exports.physics = physics;