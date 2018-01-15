//Priyanka Makin, 06/27/2017
//ATLS3000 - Code, P1.2
//For description, please see: www.priyankamakin.com/code/


function square(){
	this.x = random(0, width);
  this.y1 = random(0, height/5);
  this.y2 = random(4*height/5, height);
  this.fill = floor(random(0, 255));
  this.rate = random(-1, 1);
  this.linetop = -100;
  this.linebottom = height+100;

  this.display = function() {
    
    fill(this.fill);
   	stroke(255);
  	if(this.rate > 0){
     	noStroke();
      rect(this.x, this.y1, 24, 24);
      stroke(255);
      line(this.x, this.y1, width/2, this.linetop);
    }
    if(this.rate < 0){
      noStroke();
      rect(this.x, this.y2, 24, 24);
      stroke(255);
      line(this.x, this.y2, width/2, this.linebottom);
    }
  }
    
  this.move = function() {
    this.x = this.x + random(-1, 1);
    if(this.rate > 0){
      this.y1 = this.y1 + random(-1, 1) + this.rate*5;
    }
    if(this.rate < 0){
      this.y2 = this.y2 + random(-1, 1) + this.rate*5;
    }
  }

  this.isGone = function(){
    if(this.y1 > height || this.y1 < 0 || this.y2 > height || this.y2 < 0)
    	return true;
    else
    	return false;
  }
}

var bubbles = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(400,400);
  for (var i = 0; i < 600; i++) {
  	bubbles[i] = new square();

  }

}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();

    if(bubbles[i].isGone()){
  		bubbles.splice(i, 1);
  		bubbles.push(new square());
  	}
  }
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}