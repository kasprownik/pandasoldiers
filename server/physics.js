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

};

physics.createLevel = function () {
    'use strict';

    return stage.draw();
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
        force = 5;
    }

    if (data.action === 'right') {
        angle = 1;
        force = 2;
    }

    if (data.action === 'left') {
        angle = 179;
        force = 2;
    }

    world.moveItem(body, angle, force);
};

physics.flyItem = function (data) {
    'use strict';

    var body = world.bodies[data.id],
        angle = data.angle,
        force = 20;

    world.linearVelocity(body, angle, force);
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

physics.createBullet = function (playerID, angle) {
    'use strict';
    var player = world.objects[playerID],
        data = {
            id: 'bullet' + playerID,
            angle: angle
        };
    if (player) {
        world.createObject(20, 20, player.position.x * world.scale, player.position.y * world.scale, b2Body.b2_kinematicBody, 'bullet' + playerID);
        physics.flyItem(data);
    }
    return {object: world.objects['bullet' + playerID]};
};

exports.physics = physics;