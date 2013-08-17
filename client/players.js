var drawPlayers = function (ctx){
    var i = 0,
        ln = 0,
        players = models.players;

    _.each(players,function(player){
    	drawSinglePlayer(ctx,player);
    	drawSinglePlayerLife(ctx, player);
    });   
}

var drawSinglePlayer = function (ctx, model) {

    var player = model;

    ctx.beginPath();
    ctx.arc(model.x, model.y, 2, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.stroke();

}

var drawSinglePlayerLife = function (ctx, model) {
	
}