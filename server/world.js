var box2D = require('./../lib/box2d.js').Box2D
    , b2Vec2 = box2D.Common.Math.b2Vec2
    , b2World = box2D.Dynamics.b2World
    , b2FixtureDef = box2D.Dynamics.b2FixtureDef
    , b2BodyDef = box2D.Dynamics.b2BodyDef
    , b2Body = box2D.Dynamics.b2Body
    , b2PolygonShape = box2D.Collision.Shapes.b2PolygonShape;


var world = {
    current: {},
    scale: 30,
    id: new Date().getTime() + Math.random(),
    objects: {}
};

world.spawn = function () {
    'use strict';

    world.current = new b2World(
        new b2Vec2(0, 10),
        true
    );
};


world.createObject = function (width, height, pX, pY, type, id) {
    'use strict';
                   console.log('dsds');
    var bodyDef,
        polygonShape,
        fixtureDef,
        body,
        item,
        itemDefinition;

    bodyDef = new b2BodyDef();
    bodyDef.type = type;
    bodyDef.position.Set(pX / world.scale, pY / world.scale);
    polygonShape = new b2PolygonShape();
    polygonShape.SetAsBox(width / 2 / world.scale, height / 2 / world.scale);
    fixtureDef = new b2FixtureDef();
    fixtureDef.density = 1.0;
    fixtureDef.friction = 0.5;
    fixtureDef.restitution = 0.5;
    fixtureDef.shape = polygonShape;
    body = world.current.CreateBody(bodyDef);
    item = body.CreateFixture(fixtureDef);
    itemDefinition = item.GetBody().GetDefinition();
    itemDefinition.id = id;
    world.objects[id] = itemDefinition;
    return {
        itemDefinition: itemDefinition
    };
};

exports.world = world;