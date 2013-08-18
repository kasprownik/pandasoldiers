var drawBullets = function (ctx) {
    var i = 0,
        ln = 0,
        bullets = models.bullets;
    _.each(bullets, function (bullet) {
        drawSingleBullet(ctx, bullet);
    });
};

var drawSingleBullet = function (ctx, model) {

    var bullet = model;

    if (bullet) {
        ctx.fillStyle = 'red';

        ctx.fillRect(bullet.x - 10, bullet.y  - 1, 20, 2);

        ctx.rotate(bullet.angle * 90);
    }
};