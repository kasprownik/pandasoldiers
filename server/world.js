var box2D = require('./../lib/box2d.js').Box2D,
    b2Vec2 = box2D.Common.Math.b2Vec2,
    b2World = box2D.Dynamics.b2World,
    b2FixtureDef = box2D.Dynamics.b2FixtureDef,
    b2BodyDef = box2D.Dynamics.b2BodyDef,
    b2PolygonShape = box2D.Collision.Shapes.b2PolygonShape;


var world = {
    current: {},
    scale: 30,
    id: new Date().getTime() + Math.random(),
    objects: {},
    bullets: {},
    bodies: {},
    players: {}
};

world.spawn = function () {
    'use strict';

    world.current = new b2World(
        new b2Vec2(0, 30),
        true
    );
};

world.createObject = function (width, height, pX, pY, type, id) {
    'use strict';

    var bodyDef,
        polygonShape,
        fixtureDef,
        body,
        item,
        fixtureDefinition,
        itemDefinition;

    bodyDef = new b2BodyDef();
    bodyDef.type = type;
    bodyDef.position.Set((pX + width / 2) / world.scale, (pY + height / 2) / world.scale);
    polygonShape = new b2PolygonShape();

    fixtureDef = new b2FixtureDef();
    fixtureDef.density = 1;
    fixtureDef.friction = 0.8;
    fixtureDef.restitution = 0.2;
    fixtureDef.shape = polygonShape;
    fixtureDef.shape.SetAsBox(width / world.scale / 2, height / world.scale / 2);
    body = world.current.CreateBody(bodyDef);
    item = body.CreateFixture(fixtureDef);
    itemDefinition = item.GetBody().GetDefinition();
    itemDefinition.id = id;
    fixtureDefinition = item.GetAABB();

    itemDefinition.size = {
        width: fixtureDefinition.upperBound.x - fixtureDefinition.lowerBound.x,
        height: fixtureDefinition.upperBound.y - fixtureDefinition.lowerBound.y
    };
    world.bodies[id] = body;
    world.objects[id] = itemDefinition;
    return {
        itemDefinition: itemDefinition
    };
};


world.createKineticObject = function (width, height, pX, pY, type, id) {
    'use strict';

    var bodyDef,
        polygonShape,
        fixtureDef,
        body,
        item,
        fixtureDefinition,
        itemDefinition;

    bodyDef = new b2BodyDef();
    bodyDef.type = type;
    bodyDef.position.Set((pX + width / 2) / world.scale, (pY + height / 2) / world.scale);
    polygonShape = new b2PolygonShape();

    fixtureDef = new b2FixtureDef();
    fixtureDef.density = 0.1;
    fixtureDef.friction = 1;
    fixtureDef.restitution = 0;
    fixtureDef.shape = polygonShape;
    fixtureDef.shape.SetAsBox(width / world.scale / 2, height / world.scale / 2);
    body = world.current.CreateBody(bodyDef);
    body.SetUserData({id: id});
    item = body.CreateFixture(fixtureDef);
    itemDefinition = item.GetBody().GetDefinition();
    itemDefinition.id = id;
    fixtureDefinition = item.GetAABB();

    itemDefinition.size = {
        width: fixtureDefinition.upperBound.x - fixtureDefinition.lowerBound.x,
        height: fixtureDefinition.upperBound.y - fixtureDefinition.lowerBound.y
    };
    world.bodies[id] = body;
    world.bullets[id] = itemDefinition;
    return {
        itemDefinition: itemDefinition
    };
};

world.moveItem = function (body, angle, force) {
    'use strict';
    if (body) {
        var vector = new b2Vec2(
            Math.cos(angle * (Math.PI / 180)) * force,
            Math.sin(angle * (Math.PI / 180)) * force
        );

        body.ApplyImpulse(vector, body.GetWorldCenter());
    }
};

world.linearVelocity = function (body, angle, force) {
    'use strict';

    var vector = new b2Vec2(
        Math.cos(angle * (Math.PI / 180)) * force,
        Math.sin(angle * (Math.PI / 180)) * force
    );

    body.SetLinearVelocity(vector);
};

world.removeBody = function (id) {
    'use strict';

    world.bodies[id].GetWorld().DestroyBody(world.bodies[id]);
};

exports.world = world;