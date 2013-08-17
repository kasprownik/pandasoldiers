function Bullet(data) {
    'use strict';

    if (!(this instanceof Bullet)) {
        return new Bullet(data);
    }

    this.x = 0;
    this.y = 0;
    this.width = 10;
    this.height = 2;
    this.velocity = 10;
    this.angle = 90;

}

Bullet.prototype = {

};

exports.bulletModel = Bullet;