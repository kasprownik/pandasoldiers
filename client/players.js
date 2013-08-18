var texturePath = '/client/textures/';

var playerTexturesPaths = [
    {
        left: texturePath + 'pandaL-1.png',
        right: texturePath + 'pandaR-1.png'
    },
    {
        left: texturePath + 'pandaL-2.png',
        right: texturePath + 'pandaR-2.png'
    },
    {
        left: texturePath + 'pandaL-3.png',
        right: texturePath + 'pandaR-3.png'
    },
    {
        left: texturePath + 'pandaL-4.png',
        right: texturePath + 'pandaR-4.png'
    }
];

var playerTextures = _.map(playerTexturesPaths, function (pathSet) {
    var texture = {
        left: new Image(),
        right: new Image()
    };

    texture.left.src = pathSet.left;
    texture.right.src = pathSet.right;

    return texture;
});

function preparePlayerTextures() {
    var i = 0;
    _.each(models.players, function (player) {
        player.textures = playerTextures[i];
        ++i;
    });
};


var drawPlayers = function (ctx) {
    var i = 0,
        ln = 0,
        players = models.players;

    _.each(players, function (player) {
        drawSinglePlayer(ctx, player);
        drawSinglePlayerLife(ctx, player);
        drawSinglePlayerName(ctx, player);
    });
};

var drawSinglePlayer = function (ctx, model) {
    var player = model;

    ctx.fillStyle = 'black';
    ctx.drawImage(player.face === 'left' ? player.textures.left : player.textures.right, player.x - 10, player.y - 10);


    ctx.rotate(player.angle * 90);

    drawSinglePlayerLife(ctx, player);
};

var drawSinglePlayerName = function (ctx, player) {
    ctx.fillStyle = '#222222';
    ctx.font = "bold 9px Arial";
    ctx.fillText(player.name, player.x - 10, player.y - 15);

};

var drawSinglePlayerLife = function (ctx, player) {
    var life = player.life,
        barLength = (life * 20) / 100;

    if (life >= 80) {
        ctx.fillStyle = 'green';
    } else if (life < 80 && life >= 60) {
        ctx.fillStyle = 'lawngreen';
    } else if (life < 60 && life >= 40) {
        ctx.fillStyle = 'yellow';
    } else if (life < 40 && life >= 20) {
        ctx.fillStyle = 'orange';
    } else if (life < 20) {
        ctx.fillStyle = 'red';
    }

    ctx.fillRect(player.x - 10, player.y - 14, barLength, 3);
}