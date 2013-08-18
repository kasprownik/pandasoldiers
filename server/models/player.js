function Player(data) {
    'use strict';

    if (!(this instanceof Player)) {
        return new Player(data);
    }

    this.id = data.playerID;
    this.face = 'left';
    this.x = data.pX;
    this.y = data.pY;
    this.velocity = 0;
    this.width = 20;
    this.height = 20;
    this.name = 'Name';
    this.life = 100;

}

Player.prototype = {

};

exports.playerModel = Player;