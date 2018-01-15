//Priyanka Makin, 07/05/2017
//ATLS3000 - Code, BMP1
//For description, please see: www.priyankamakin.com/code/


function setup() {
	createCanvas(windowWidth, windowHeight);

}

function draw() {
	background(0);

	var color = 255;

	for(var i = 0; i < width; i += 20){
		for(var j = 0; j < height; j += 20){
			fill(color);
			ellipse(i+10, j+10, 20, 20);
		}
		color = color - 5;
	}
}

function windowResized(){
	createCanvas(windowWidth, windowHeight);
}