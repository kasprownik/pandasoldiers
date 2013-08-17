var drawStage = function (ctx) {
    var stageHolder = ctx,
    	platforms = models.stage;

	_.each(platforms,function(platform){
		switch(platform.type){
		case "rectangle":
    		drawRectangle(ctx,platform);
			break;
		}	
    })

}

var drawRectangle = function (ctx, platform) {

	var coordinates = platform.coordinates,
		start = coordinates.start,
		end = coordinages.end;

	ctx.beginPath();
	ctx.rect(start.x, start.y, end.x, end.y);
	ctx.fillStyle = 'yellow';
	ctx.fill();
	ctx.lineWidth = 7;
	ctx.strokeStyle = 'black';
	ctx.stroke();

}