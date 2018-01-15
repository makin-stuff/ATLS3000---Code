//Priyanka Makin, 06/27/2017
//ATLS3000 - Code, P1.3
//For description, please see: www.priyankamakin.com/code/


// //tried to set up a triangle object, but somehow draw() wouldn't read in x1, y1, x2...
// function triangle(){
// 	this.x1 = random(-100, 100);
// 	this.x2 = random(-100, 100);
// 	this.x3 = random(-100, 100);
// 	this.y1 = random(-100, 100);
// 	this.y2 = random(-100, 100);
// 	this.y3 = random(-100, 100);

// 	this.display = function(){
// 		fill(0, 10);
// 		stroke(0, 160);
// 		//translate(width/2, height/2);
// 		triangle(x1, y1, x2, y2, x3, y3);
// 	}
// }

// var triangles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	//createCanvas(400,400);
	frameRate(1.5);
	// for(var i = 0; i < 30; i++){
	// 	triangles[i] = new triangle();
	// }
}

var w = 100;
var h = 100;
var r = 5;
var s = 8;

function draw() {
	background(240);

	// for(var i = 0; i < triangles.length; i++){
 //  		triangles[i].display();
 //  		rotate(i/5);
 //  		scale(i/8);
 //  	}

 	var x1 = random(-w, w);
	var y1 = random(-h, h);
	var x2 = random(-w, w);
	var y2 = random(-h, h);
	var x3 = random(-w, w);
	var y3 = random(-h, h);


  	stroke(0, 100);
  	translate(width/2, height/2);

  	for(var i = 0; i < 30; i++){
  		push();

  		//i/5 = angle
  		rotate(i/r);

  		//number/factor to scale the y-axis by
  		scale(i/s);
  		fill(random(0, 255), random(0, 255), random(0, 255), 100);
  		triangle(x1, y1, x2, y2, x3, y3);
  		pop();
  	}
}

var val1 = true;
var val2 = true;
function mouseClicked(){
	if (val1 && val2){
		w  = width;
		h = height;
		r = 5;
		s = 8;
	} 
	if(val1 && !val2){
		w = 100;
		h = 100;
		r = 5;
		s = 8;
	}
	if(!val1 && val2){
		w = width;
		h = height;
		r = random(0,10);
		s = random(0,10);
	}
	if(!val1 && !val2){
		w = 100;
		h = 100;
		r = random(0,10);
		s = random(0,10);
	}

	val2 = !val2;
	if(val2)
		val1 = !val1;
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);

}