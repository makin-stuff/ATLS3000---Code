//Priyanka Makin, 06/18/2017
//ATLS3000 - Code, PC2a
//For description, please see: www.priyankamakin.com/code/


//number of points and lines wanted
var num = 6;

var points = [];
//var lines = [];

function setup() {
	createCanvas(400,400);

	for(var i = 0; i < num; i++){
		points[i] = {
			x: random(100, 300),
			y: random(50, 200),
			display: function(){
				stroke(0);
				strokeWeight(7);
				point(this.x, this.y);
			}
		}
		// lines[i] = {
		// 	x1: points[i].x, 
		// 	y1: points, 
		// 	x2, 
		// 	y2,
		// 	display: function(){
		// 		stroke(0);
		// 		line(this.x1, this.y1, this.x2, this.y2);
		// 	}
		// }
	}
}

function draw() {
	background(255, 255, 0);

	//"TAM"
	stroke(0);
	strokeWeight(7.5);
	fill('#ffff70');
	textSize(150);
	textFont("Arial Black");
	text("TAM", 22, 360);		//text(string, x, y);	

	for(var i = 0; i < num; i++){

		//display lines --> want to eventually use an array for these too
		stroke(255, 255, 179);
		strokeWeight(4);
		if(i == num - 1)
			line(points[i].x, points[i].y, points[0].x, points[0].y);
		else
			line(points[i].x, points[i].y, points[i+1].x, points[i+1].y);

		//display points
		points[i].display();
	}
}