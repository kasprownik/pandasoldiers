function Player(data) {
    'use strict';

    if (!(this instanceof Player)) {
        return new Player(data);
    }

    this.id = 1;
    this.face = 'left';
    this.x = 0;
    this.y = 0;
    this.velocity = 0;
    this.width = 10;
    this.height = 10;
    this.name = 'Name';
    this.life = 3;

    return this;

}

Player.prototype = {

    add: function () {

    },
    move: function () {

    },
    remove: function () {

    }

};

exports.playerModel = Player;