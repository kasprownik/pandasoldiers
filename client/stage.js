var drawStage = function (ctx) {
    var stageHolder = ctx,
    	platforms = models.stage;

	//create sky
	ctx.fillStyle = "#33ABF9";
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
var bgImg = new Image();
		bgImg.src = "/client/textures/test.png";

var drawRectangle = function (ctx, platform) {
	var coordinates = platform.coordinates,
		texture = platform.texture,
		start = coordinates.start,
		size = coordinates.size;



	if (texture === 'wall'){
		ctx.fillStyle = 'orange';
	} else if (texture === 'ground'){
		ctx.fillStyle = 'saddlebrown';
	} else if (texture === 'grass'){
		ctx.fillStyle = 'green';
	}

	ctx.fillRect(start.x-size.x/2, start.y-size.y/2, size.x, size.y);
	
	ctx.drawImage(bgImg, start.x-size.x/2,  start.y-size.y/2);
		
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
			ctx.fillStyle = 'darkgreen';
		//	ctx.fillRect(start.x, start.y-offset, size.x, offset);
    	}else if(platform.texture === 'ground'){
			start = platform.coordinates.start,
			size = platform.coordinates.size;

			//create decoration grass
			ctx.fillStyle = 'brown';
		//	ctx.fillRect(start.x, start.y+size.y, size.x, offset);
    	}
    });

}