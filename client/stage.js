var texturePath = '/client/textures/',
	grass 		 = new Image(),
	grassLeft 	 = new Image(),
	grassRight 	 = new Image(),
	grassSingle  = new Image(),
	ground 		 = new Image(),
	groundLeft 	 = new Image(),
	groundRight  = new Image(),
	groundSingle = new Image(),
	bottom 		 = new Image(),
	leftWall 	 = new Image(),
	rightWall 	 = new Image(),
	groundBottom = new Image(),
	bgCanvas 	 = new Image(),
	grassTop 	 = new Image();

	grass.src 		 = texturePath+'grass.jpg';
	grassLeft.src 	 = texturePath+'grassleft.png';
	grassRight.src 	 = texturePath+'grassright.png';
	grassSingle.src  = texturePath+'grasssingle.png';
	ground.src 		 = texturePath+'ground.jpg';
	groundLeft.src 	 = texturePath+'groundleft.png';
	groundRight.src  = texturePath+'groundright.png';
	groundSingle.src = texturePath+'groundsingle.png';
	bottom.src 		 = texturePath+'bottom.jpg';
	leftWall.src 	 = texturePath+'wallleft.png';
	rightWall.src 	 = texturePath+'wallright.png';
	groundBottom.src = texturePath+'groundbottom.png';
	grassTop.src 	 = texturePath+'grasstop.png';
	bgCanvas.src 	 = texturePath+'bg.jpg';

var texturesObj = {
	'ground': 		ground,
	'groundLeft': 	groundLeft,
	'groundRight': 	groundRight,
	'groundSingle': groundSingle,
	'grass': 		grass,
	'grassLeft': 	grassLeft,
	'grassRight': 	grassRight,
	'grassSingle': 	grassSingle,
	'bottom': 		bottom,
	'leftwall': 	leftWall,
	'rightwall': 	rightWall
}

var drawStage = function (ctx) {
    var stageHolder = ctx,
    	platforms = models.stage;

	//create background for canvas
	ctx.drawImage(bgCanvas, 0, 0);

	//create stage platforms
	_.each(platforms,function(platform){
		drawRectangle(ctx,platform);
    })

}

var getTexture = function(texture, start, size){
	ctx.drawImage(texturesObj[texture], start.x-size.x/2,  start.y-size.y/2);
}

var drawRectangle = function (ctx, platform) {
	var coordinates = platform.coordinates,
		texture = platform.texture,
		start = coordinates.start,
		size = coordinates.size;
		
	if(texturesObj[texture]){
		ctx.drawImage(texturesObj[texture], start.x-size.x/2,  start.y-size.y/2);		
	}						
}

var drawDecoration = function (ctx) {
    var stageHolder = ctx,
		platforms = models.stage,
		offset = 5;

	_.each(platforms,function(platform){
		var start = platform.coordinates.start,
			size = platform.coordinates.size;

		//decorate with roots	
		if(platform.last){
			ctx.drawImage(groundBottom, (start.x-size.x/2),  (start.y-size.y/2)+size.y);
    	}

    	//decorate with flowers
    	if(platform.texture && platform.texture.indexOf('grass') !== -1){
			ctx.drawImage(grassTop, (start.x-size.x/2),  (start.y-size.y/2)-offset);
    	}
    });
}