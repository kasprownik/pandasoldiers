var box2D = require('./../lib/box2d.js').Box2D
    , stage = require('./stage.js').stage
    , world = require('./world.js').world
    , b2Vec2 = box2D.Common.Math.b2Vec2
    , b2World = box2D.Dynamics.b2World
    , b2FixtureDef = box2D.Dynamics.b2FixtureDef
    , b2BodyDef = box2D.Dynamics.b2BodyDef
    , b2Body = box2D.Dynamics.b2Body
    , b2PolygonShape = box2D.Collision.Shapes.b2PolygonShape;


var physics = {};

physics.init = function () {
    'use strict';

    world.spawn();

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

exports.physics = physics;