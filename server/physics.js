var box2D = require('./../lib/box2d.js').Box2D
    , stage = require('./stage.js').stage
    , world = require('./world.js').world
    , bulletModel = require('./models/bullet.js').bulletModel
    , playerModel = require('./models/player.js').playerModel
    , stageModel = require('./models/stage.js').stageModel
    , b2Body = box2D.Dynamics.b2Body
    , b2Dynamics = box2D.Dynamics.b2ContactListener
    , ps = require('../lib/pubsub.js');


var physics = {};

physics.init = function () {
    'use strict';

    world.spawn();

    var listener = new b2Dynamics();
    listener.BeginContact = function (contact) {
        if (contact.GetFixtureA().GetDensity() === 0.1) {
            var bulletID = contact.GetFixtureA().GetBody().GetUserData().id;

            if (world.bullets && world.bullets[bulletID]) {
                world.bullets[bulletID].kill = true;
            }
        }
    };

    world.current.SetContactListener(listener);

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
            8,       //velocity iterations
            3       //position iterations
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
        force = 60;

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

physics.getData = function () {
    'use strict';

    return {players: world.players, objects: world.objects, bullets: world.bullets};
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


physics.removeBullet = function (bulletID) {
    'use strict';

    if (world.bullets && world.bullets[bulletID]) {
        delete world.bullets[bulletID];
        world.removeBody(bulletID);
        delete world.bodies[bulletID];
    }

};

physics.createBullet = function (playerID, angle) {
    'use strict';
    var player = world.objects[playerID],
        playerBody = world.bodies[playerID],
        timestamp = new Date().getTime(),
        positionFix = {
            x: 0,
            y: 0
        },
        data = {
            id: 'bullet' + playerID + timestamp,
            angle: angle
        };

    if (player) {

        if ((angle >= 0 && angle <= 45) || (angle > 315 && angle <= 360)) {
            positionFix.x = 15;
        }

        if (angle > 45 && angle <= 135) {
            positionFix.y = 20;
        }

        if (angle > 135 && angle <= 225) {
            positionFix.x = -20;
            positionFix.y = 0;
        }

        if (angle > 225 && angle <= 315) {
            positionFix.y = -20;
        }

        world.createKineticObject(4, 4, player.position.x * world.scale + positionFix.x, player.position.y * world.scale + positionFix.y, b2Body.b2_dynamicBody, data.id);
        physics.flyItem(data);
        world.moveItem(playerBody, angle, -1);
        world.bullets[data.id].angle = angle;
    }
    return {object: world.bullets[data.id]};
};

exports.physics = physics;