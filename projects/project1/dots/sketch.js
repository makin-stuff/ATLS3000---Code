//Priyanka Makin, 06/27/2017
//ATLS3000 - Code, P1.1
//For description, please see: www.priyankamakin.com/code/


function POINT(){
	this.x = random(0, width);
	//this.y = random(0, height);
	this.y = random(0, 630);		//fullscreen browser
	this.xnew = random(0, width);
	this.ynew = random(0, 630);
	this.xmove;
	this.ymove;
	
	this.display = function(){
		stroke(0);
		strokeWeight(7);
		point(this.x, this.y);
	}

	this.random = function(){
		//this.x = this.xnew;
		//this.y = this.ynew;
		this.xnew = random(0, width);
		this.ynew = random(0, 630);
	}

	this.move = function(){
		this.xmove = this.xnew/this.x;
		this.ymove = this.ynew/this.y;

		if(this.x < this.xnew){
			this.x += 2*this.xmove;
		}
		if(this.x > this.xnew){
			this.x -= 2*this.xmove;
		}

		if(this.y < this.ynew){
			this.y += 2*this.ymove;
		}
		if(this.y > this.ynew){
			this.y -= 2*this.ymove;
		}
	}
}

//number of points and lines wanted
var num = 25;

var points = [];
//var lines = [];

function setup() {
	createCanvas(windowWidth, windowWidth);
	//createCanvas(400,400);
	noCursor();

	//create array of points
	for(var i = 0; i < num; i++){
		points[i] = new POINT();
	}
	//frameRate(1);
}

function draw() {
	background(150);

	// if(frameRate % 25 == 0){
		// points[i].random();
		for(var i = 0; i < num; i++){

			//display lines --> want to eventually use an array for these too
			stroke(255);
			strokeWeight(2);
			if(i == num - 1)
				line(points[i].x, points[i].y, points[0].x, points[0].y);
			else
				line(points[i].x, points[i].y, points[i+1].x, points[i+1].y);
			points[i].move();
			points[i].display();
		}
	// }
}

function mousePressed(){
	for(var i = 0; i < num; i++){
		points[i].random();
		// points[i].display();
	}

}

