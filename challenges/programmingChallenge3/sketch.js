//Priyanka Makin, 06/13/2017
//ATLS3000 - Code, PC3
//For description, please see: www.priyankamakin.com/code/


var value = 0;
var backColor = 0;
var strokeColor = 255;

var on = false;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	console.log(value);
	background(backColor);



	stroke(strokeColor);
	strokeWeight(3);
	
	//left button
	noFill();
	if(mouseX > 50 && mouseX < 150 && mouseY > 150 && mouseY < 250){
		fill(255, 0, 0);
		if(mouseIsPressed){
			background(backColor);
			stroke(strokeColor);				
			noFill();
			ellipse(100, 200, 100, 100);
			noStroke();
		}
	}
	rect(50, 150, 100, 100);

	//right button
	noFill();
	if(mouseX > 250 && mouseX <350 && mouseY > 150 && mouseY < 250){
		fill(0, 0, 255);
		value = 1;
	} else{
		value = 0;
	}
	stroke(strokeColor);
	rect(250, 150, 100, 100);
}

var val = true;
function mouseClicked(){
	if (value == 1 && val){
			backColor = 255;
			strokeColor = 0;
		} else {
			backColor = 0;
			strokeColor = 255;
		}
	val = !val;
}

