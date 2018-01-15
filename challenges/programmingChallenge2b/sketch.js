//Priyanka Makin, 06/13/2017
//ATLS3000 - Code, PC2b
//For description, please see: www.priyankamakin.com/code/


//is there anyway to make the ellipses draw faster?? so there is more of
//a continuous stroke??

var col ={
	r: 183,
	g: 211,
	b: 230
};

var backColor ={
	r: 255,
	g: 255, 
	b: 26
};

//pick like 5 colors
	//blue: 183, 211, 230
	//white: 255, 255, 198
	//pink: 213, 145, 138
	//purple: 191, 160, 151
	//green: 190, 236, 156

var value = 1;

// var speed = abs(pmouseX - mouseX);
// var size = speed*18;

function setup() {
	createCanvas(400,400);
	background(backColor.r, backColor.g, backColor.b);
}

function draw() {
  	
  	//"TAM"
  	stroke(0);
  	strokeWeight(7.5);
  	fill('#ffff70');
  	textSize(150);
  	textFont("Arial Black");
  	text("TAM", 22, 250);		//text(string, x, y);

  	noStroke();
	fill(col.r, col.g, col.b, 175);
	ellipse(mouseX, mouseY, abs(pmouseX - mouseX)*3, abs(pmouseX - mouseX)*3);
}

function mouseClicked(){
	value++;
	if(value == 0){
		col.r = 0;
		col.g = 0;
		col.b = 0;
		//value = 1;
	}
	if(value == 1){
		col.r = 183;
		col.g = 211;
		col.b = 230;
		//value = 2;
	}
	if(value == 2){
		col.r = 255;
		col.g = 255;
		col.b = 198;
		//value = 3;
	}
	if(value == 3){
		col.r = 213;
		col.g = 145;
		col.b = 138;
		//value = 4;
	}
	if(value == 4){
		col.r = 191;
		col.g = 160;
		col.b = 151;
		//value = 5;
	}
	if(value == 5){
		col.r = 161;
		col.g = 244;
		col.b = 156;
		value = 0;
	}
}

function keyPressed(){
	createCanvas(400,400);
	background(backColor.r, backColor.g, backColor.b);
}