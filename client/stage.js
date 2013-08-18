var texturePath = '/client/textures/',
	grass = new Image(),
	grassLeft = new Image(),
	grassRight = new Image(),
	grassSingle = new Image(),
	ground = new Image(),
	groundLeft = new Image(),
	groundRight = new Image(),
	groundSingle = new Image(),
	bottom = new Image(),
	leftWall = new Image(),
	rightWall = new Image(),
	groundBottom = new Image(),
	bgCanvas = new Image(),
	grassTop = new Image();

	grass.src = texturePath+'grass.jpg';
	grassLeft.src = texturePath+'grassleft.png';
	grassRight.src = texturePath+'grassright.png';
	grassSingle.src = texturePath+'grasssingle.png';
	ground.src = texturePath+'ground.jpg';
	groundLeft.src = texturePath+'groundleft.png';
	groundRight.src = texturePath+'groundright.png';
	groundSingle.src = texturePath+'groundsingle.png';
	bottom.src = texturePath+'bottom.jpg';
	leftWall.src = texturePath+'wallleft.png';
	rightWall.src = texturePath+'wallright.png';
	groundBottom.src = texturePath+'groundbottom.png';
	grassTop.src = texturePath+'grasstop.png';
	bgCanvas.src = texturePath+'bg.jpg';

var drawStage = function (ctx) {
    var stageHolder = ctx,
    	platforms = models.stage;

	//create sky
	
	ctx.drawImage(bgCanvas, 0, 0);

	//create stage platforms
	_.each(platforms,function(platform){
		switch(platform.type){
		case "rectangle":
    		drawRectangle(ctx,platform);
			break;
		}
    })

}

var getGrass = function(texture, start, size){
	if(texture === 'grass'){
		ctx.drawImage(grass, start.x-size.x/2,  start.y-size.y/2);	
	}else if(texture === 'grassLeft'){
		ctx.drawImage(grassLeft, start.x-size.x/2,  start.y-size.y/2);	
	}else if(texture === 'grassRight'){
		ctx.drawImage(grassRight, start.x-size.x/2,  start.y-size.y/2);	
	}else if(texture === 'grassSingle'){
		ctx.drawImage(grassSingle, start.x-size.x/2,  start.y-size.y/2);	
	}
}

var getGround = function(texture, start, size){
	if(texture === 'ground'){
		ctx.drawImage(ground, start.x-size.x/2,  start.y-size.y/2);	
	}else if(texture === 'groundLeft'){
		ctx.drawImage(groundLeft, start.x-size.x/2,  start.y-size.y/2);	
	}else if(texture === 'groundRight'){
		ctx.drawImage(groundRight, start.x-size.x/2,  start.y-size.y/2);	
	}else if(texture === 'groundSingle'){
		ctx.drawImage(groundSingle, start.x-size.x/2,  start.y-size.y/2);	
	}
}

var drawRectangle = function (ctx, platform) {
	var coordinates = platform.coordinates,
		texture = platform.texture,
		start = coordinates.start,
		size = coordinates.size;
		
		if(texture.indexOf('grass') !== -1){
			
			getGrass(texture, start, size);
					
		}else if(texture.indexOf('ground') !== -1){
			
			getGround(texture, start, size);

		}else if(texture.indexOf('bottom') !== -1){
			ctx.drawImage(bottom, start.x-size.x/2,  start.y-size.y/2);
		}else if(texture.indexOf('leftwall') !== -1){
			ctx.drawImage(leftWall, start.x-size.x/2,  start.y-size.y/2);
		}else if(texture.indexOf('rightwall') !== -1){
			ctx.drawImage(rightWall, start.x-size.x/2,  start.y-size.y/2);
		}			
						
}

var drawDecoration = function (ctx) {
    var stageHolder = ctx,
		platforms = models.stage,
		offset = 5;

	_.each(platforms,function(platform){
		var start = platform.coordinates.start,
			size = platform.coordinates.size;

		if(platform.last){
			ctx.drawImage(groundBottom, (start.x-size.x/2),  (start.y-size.y/2)+size.y);
    	}
    	if(platform.texture.indexOf('grass') !== -1){
			ctx.drawImage(grassTop, (start.x-size.x/2),  (start.y-size.y/2)-offset);
    	}
    });

}