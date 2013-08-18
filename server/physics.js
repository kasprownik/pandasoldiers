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

physics.createLevel = function () {
    'use strict';

    return stage.draw();
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
            3,       //velocity iterations
            1       //position iterations
        );
        world.current.ClearForces();
    }
};

physics.getObject = function (id) {
    'use strict';

    var object = world.objects[id];

    return object;
};

physics.moveItem = function (data) {
    'use strict';

    var body = world.bodies[data.id],
        angle,
        force;

    if (data.action === 'up') {
        angle = 270;
        force = 4;
    }

    if (data.action === 'right') {
        angle = 1;
        force = 1;
    }

    if (data.action === 'left') {
        angle = 179;
        force = 1;
    }

    world.moveItem(body, angle, force);
};

physics.createPlayer = function (playerID) {
    'use strict';

    var player = new playerModel({playerID: playerID, pX: 50, pY: 50});

    world.createObject(20, 20, 100, 100, b2Body.b2_dynamicBody, playerID);
    world.players[playerID] = player;

    return {id: playerID, player: world.players[playerID], object: world.objects[playerID]};
};

physics.getPlayers = function () {
    'use strict';

    return {players: world.players, objects: world.objects};
};

physics.removePlayer = function (playerID) {
    'use strict';
    if (world.players && world.players[playerID]) {
        delete world.players[playerID];
        delete world.objects[playerID];
        world.removeBody(playerID);
        delete world.bodies[playerID];
    }
};

physics.movePlayer = function (data) {
    'use strict';

    var playerID = data.playerID,
        action = data.action;

    console.log('movePlayer');
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