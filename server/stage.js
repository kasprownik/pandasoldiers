var box2D = require('./../lib/box2d.js').Box2D
    , world = require('./world.js').world
    , stageModel = require('./models/stage.js').stageModel
    , b2Vec2 = box2D.Common.Math.b2Vec2
    , b2World = box2D.Dynamics.b2World
    , b2FixtureDef = box2D.Dynamics.b2FixtureDef
    , b2BodyDef = box2D.Dynamics.b2BodyDef
    , b2Body = box2D.Dynamics.b2Body
    , b2PolygonShape = box2D.Collision.Shapes.b2PolygonShape;


var stage = {};

stage.draw = function () {
    'use strict';

    var i = 0,
        currentItem,
        items = stageModel().items,
        levelModel = {},
        parsedLevelModel = {},
        level = [];


    for (i; i < items.length; i += 1) {
        currentItem = items[i];
        levelModel = world.createObject(currentItem.coordinates.size.x, currentItem.coordinates.size.y, currentItem.coordinates.start.x, currentItem.coordinates.start.y, b2Body.b2_staticBody, 'levelItem'+i);
        parsedLevelModel = {
            type: currentItem.type,
            texture: currentItem.texture,
            coordinates: {
                start: {
                    x: levelModel.itemDefinition.position.x * world.scale,
                    y: levelModel.itemDefinition.position.y * world.scale
                },
                size: {
                    x: levelModel.itemDefinition.size.width * world.scale,
                    y: levelModel.itemDefinition.size.height * world.scale
                }
            }
        };

        level.push(parsedLevelModel);

    }
    return level;
};

exports.stage = stage;