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
		texture = platform.texture,
		start = coordinates.start,
		size = coordinates.size;

	
	
	if (texture === 'border'){
		ctx.fillStyle = 'black';
	} else if (texture === 'ground'){
		ctx.fillStyle = 'brown';
	} else if (texture === 'grass'){
		ctx.fillStyle = 'green';
	}
	
	ctx.fillRect(start.x, start.y, size.x, size.y);

}