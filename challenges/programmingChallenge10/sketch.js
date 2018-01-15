//Priyanka Makin, 07/20/2017
//ATLS3000 - Code, PC10
//For description, please see: www.priyankamakin.com/code/

var fish = [];
var fishImages = [];

//polar fish
var r = 300;
var a = 0.0;

//sin fish
var sinfish;
var magnitude;
var sinAngle = 0;
var sinx;

//floating-up fish (force)
var gravity = 0.03;
var speed = 0;
var forcey = 0;

//recursion
var recAngle = 0.4;
var recAngle2 = -0.4;



function Organism(img){
	this.x;
	this.y;
	this.xoff = 0;
	this.yoff = 0;
	this.xinc = random(-0.01, 0.01);
	this.yinc = random(-0.01, 0.01);

	this.img = img;

	this.display = function(){
		this.xoff += this.xinc;
		this.yoff += this.yinc;

		this.x = map(noise(this.xoff), 0, 1, 0, width);
		this.y = map(noise(this.yoff), 0, 1, 0, height);

		fill(255);
		image(this.img, this.x, this.y);
		//ellipse(this.x, this.y, 24, 24);
	}
}


function preload(){
	//perlin noise fish
	fishImages[0] = loadImage("fish0.png");
	fishImages[1] = loadImage("fish1.png");
	//floating-up fish
	fishImages[2] = loadImage("fish2.png");
	//sin fish
	fishImages[3] = loadImage("fish3.png");
	//star fish - polar
	fishImages[4] = loadImage("fish4.png");
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	//createCanvas(400, 400);
	imageMode(CENTER);

	for(var i = 0; i < 3; i++){
		fish[i] = new Organism(fishImages[i]);
	}

	//sin fish start
	magnitude = height/4;
	sinx = width;

	//floating-up start position
	forcey = height + 100;
}


function draw() {
	background(0, 128, 128);

	//recursion sea weed
	push();
		translate(100, height);
		push();
			translate(0, 0);
			branchLeft(75);
		pop();
		push();
			translate(20, 0);
			branchRight(66);
		pop();
		push();
			translate(12, 0);
			branchRight(90);
		pop();
	pop();

	push();
		translate(width - 100, height);
		push();
			translate(0, 0);
			branchRight(90);
		pop();
		push();
			translate(12, 0);
			branchLeft(75);
		pop();
		push();
			translate(20, 0);
			branchRight(90);
		pop();
		push();
			translate(30, 0);
			branchLeft(66);
		pop();
	pop();

	//polar star fish
	push();
		translate(width/2, height/2);
		var polarx = r * cos(a);
		var polary = r * sin(a);
		var polarfish = image(fishImages[4], polarx, polary);
	pop();
	a = a + 0.05;

	//perlin noise fish
	for(var i = 0; i < 2; i++){
		fish[i].display();
	}

	//floating-up fish
	speed = speed + gravity;
	forcey -= speed;
	if(forcey < 0){
		forcey = height + 1000;
		speed = 0;
	}
	var floatfish = image(fishImages[2], 300, forcey);

	//sin fish
	push();
		var siny = sin(sinAngle) * magnitude;
		translate(0, 3*height/4);
		var sinfish = image(fishImages[3], sinx, siny);
		sinx -= 5;
		sinAngle += 0.05;
		//if fish goes offscreen, start over
		if(sinx < -150){
			sinx = width;
		}
	pop();
}


function windowResized(){
	createCanvas(windowWidth, windowHeight);
}


function branchLeft(len){
	strokeWeight(7);
	stroke(0, 255, 0);
	line(0, 0, 0, -len);
	translate(0, -len);
	if(len > 4){
		push();
			recAngle *= -1;
			rotate(recAngle);
			branchLeft(len * 0.67);
			//console.log(angle);
		pop();
	}
}

function branchRight(len){
	strokeWeight(7);
	stroke(0, 255, 0);
	line(0, 0, 0, -len);
	translate(0, -len);
	if(len > 4){
		push();
			recAngle2 *= -1;
			rotate(recAngle2);
			branchRight(len * 0.67);
			//console.log(angle);
		pop();
	}
}
