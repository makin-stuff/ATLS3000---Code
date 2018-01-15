//Priyanka Makin, 07/20/2017
//ATLS3000 - Code, PC12a
//For description, please see: www.priyankamakin.com/code/


//images
var bg;
var heart;

//data
var likes;
var comments;

function preload(){
	//images
	bg = loadImage("background.jpg");
	heart = loadImage("heart2.png");

	//data
	likes = loadStrings('likes.txt');
	comments = loadStrings('comments.txt');
}

function setup() {
	//createCanvas(400, 400);
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
}

function draw() {
  	//background(bg);
  	image(bg, width/2, height/2, width, height);

  	var mult = 0;
  	var x;
  	var y = 45;

  	for(var i = 0; i < likes.length; i++){
  		x = 60*mult + 45;
  		//if(x%1100 == 0){
  		if(x > width - 40){
  			x = 45;
  			y = y + 55;
  			mult = 0;
  		}
  		
  		push();
  			translate(x,y);
  			rotate(parseInt(comments[i]) * radians(frameCount) * 1.5);
  			image(heart, 0, 0, parseInt(likes[i]), parseInt(likes[i]));
  		pop();
  
  		mult++;
  	}
}

function windowResized(){
	createCanvas(windowWidth, windowHeight);
}