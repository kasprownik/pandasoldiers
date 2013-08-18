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
        ctx.fillStyle = 'black';
        ctx.fillRect(bullet.x - 2, bullet.y - 2, 4, 4);

    }
};