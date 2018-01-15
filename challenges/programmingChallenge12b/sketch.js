//Priyanka Makin, 07/19/2017
//ATLS3000 - Code, PC12b
//For description, please see: www.priyankamakin.com/code/


var data;

function preload(){
	data = loadTable("binData - Copy.csv", "csv", "header");
	myFont = loadFont('Retro Computer_DEMO.ttf');
}

function setup() {
	//createCanvas(400, 400);
	createCanvas(windowWidth, 820);
}

function draw() {
	background(0);

	var c;
	var color;

	//write the text in the first column
	for(var i = 0; i < 100; i++){
		for(var r = 0; r < data.getRowCount(); r++){
			if(i%2 == 0){
				c = 0;
				color = 255;
			} else {
				c = 1;
				color = 190;
			}

			textFont(myFont);
			fill(0, color, 0);
			text(data.getString(r, c), 98*i+12, 18*r+25);
		}
	}

	// for(var r = 0; r < data.getRowCount(); r++){
	// 	fill(200);
	// 	text(data.getString(r, 1), 80, 18*r+25);
	// }
}

function windowResized(){
	createCanvas(windowWidth, 820);
}