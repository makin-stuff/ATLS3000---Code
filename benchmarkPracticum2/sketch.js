//Priyanka Makin, 07/25/2017
//ATLS3000 - Code, BMP2
//For description, please see: www.priyankamakin.com/code/


function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	var color = 0;

	for(var i = 0; i < width; i += 40){
		for(var j = 0; j < height; j += 40){
			fill(255);
			triangle(i-20, j+40, i, j, i+20, j+40);
			fill(color);
			ellipse(i+20, j+15, 12, 12);
		}
		color += 10;
	}
}

function windowResized(){
	createCanvas(windowWidth, windowHeight);
}