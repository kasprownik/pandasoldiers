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

    ctx.fillStyle = 'black';
    ctx.fillRect(player.x-10, player.y-10, 20, 20);

    ctx.rotate(player.angle*90);

    drawSinglePlayerLife(ctx, player)

}

var drawSinglePlayerLife = function (ctx, player) {
	var life = player.life,
		barLength = (life*20)/100;

	if(life >= 80){
		ctx.fillStyle = 'green';	
	} else if(life < 80 && life >= 60) {
		ctx.fillStyle = 'lawngreen';
	} else if(life < 60 && life >= 40) {
		ctx.fillStyle = 'yellow';
	} else if(life < 40 && life >= 20) {
		ctx.fillStyle = 'orange';
	} else if(life < 20) {
		ctx.fillStyle = 'red';
	}
	
	ctx.fillRect(player.x-10, player.y-13, barLength, 2);

}