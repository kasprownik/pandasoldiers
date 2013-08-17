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
		size = coordinates.size;

	ctx.beginPath();
	ctx.rect(start.x, start.y, size.x, size.y);
	ctx.fillStyle = 'black';
	ctx.fill();

}