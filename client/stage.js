var drawStage = function (ctx) {
    var stageHolder = ctx,
    	platforms = models.stage;

	//create sky
	ctx.fillStyle = "skyblue";
	ctx.fillRect(20,20,760,560);

	//create stage platforms    	
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
	
	if (texture === 'wall'){
		ctx.fillStyle = 'orange';
	} else if (texture === 'ground'){
		ctx.fillStyle = 'brown';
	} else if (texture === 'grass'){
		ctx.fillStyle = 'green';
	}
	
	ctx.fillRect(start.x, start.y, size.x, size.y);
}

var drawDecoration = function (ctx) {
    var stageHolder = ctx,
		platforms = models.stage,
		offset = 7;

	_.each(platforms,function(platform){
		var start, size;

		if(platform.texture === 'grass'){
			start = platform.coordinates.start,
			size = platform.coordinates.size;

			//create decoration grass
			ctx.fillStyle = 'blue';
			ctx.fillRect(start.x, start.y-offset, size.x, offset);
    	}
    });
	
}