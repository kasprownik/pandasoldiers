var box2D = require('./../lib/box2d.js').Box2D
    , world = require('./world.js').world
    , b2Vec2 = box2D.Common.Math.b2Vec2
    , b2World = box2D.Dynamics.b2World
    , b2FixtureDef = box2D.Dynamics.b2FixtureDef
    , b2BodyDef = box2D.Dynamics.b2BodyDef
    , b2Body = box2D.Dynamics.b2Body
    , b2PolygonShape = box2D.Collision.Shapes.b2PolygonShape;


var stage = {};

stage.draw = function (width, height) {
    'use strict';

    return {
        edges: {
            top: world.createObject(width, 30, width / 2, height, b2Body.b2_staticBody),
            right: world.createObject(width, 30, width / 2, 0, b2Body.b2_staticBody),
            bottom: world.createObject(30, height, 0, height / 2, b2Body.b2_staticBody),
            left: world.createObject(30, height, width, height / 2, b2Body.b2_staticBody)
        }
    };

};

exports.stage = stage;