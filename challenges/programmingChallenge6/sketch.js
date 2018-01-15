//Priyanka Makin, 06/21/2017
//ATLS3000 - Code, PC6
//For description, please see: www.priyankamakin.com/code/


var bubbles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	//createCanvas(400, 400);
	
	for(var i = 0; i < 150; i++){
		bubbles[i] = {
			x: 300, 
			y: 200,
			xrand: 0,
			yrand:0,
			display: function(){
				noStroke();
				fill(255, 100);
				ellipse(this.x, this.y, 20, 20);
			},
			move: function(){
				// this.x = this.x + random(-1, 1);
				// this.y = this.y + random(-1, 1);

				//position 1--works
				if(mouseX < 0 && mouseY < 0){
					this.x = 0 + random(-1, 1);
					this.y = 0 + random(-1, 1);
				} 
				//position 2
				else if(mouseY < 0 && mouseX > 0 && mouseX < width){
					this.xrand = this.xrand + random(-1,1)*abs(pmouseX - mouseX)*0.5 + random(-1, 1);
					this.yrand = this.yrand + random(-1,1)*abs(pmouseY - mouseY)*0.5 + random(-1, 1);
					this.x = mouseX + this.xrand;
					this.y = 0 + this.yrand;
				} 
				//position 3--works
				else if (mouseX > width && mouseY < 0){
					this.x = width + random(-1, 1);
					this.y = 0 + random(-1, 1);	
				} 
				//position 4
				else if(mouseX < 0 && mouseY > 0 && mouseY < height){
					this.xrand = this.xrand + random(-1,1)*abs(pmouseX - mouseX)*0.5 + random(-1, 1);
					this.yrand = this.yrand + random(-1,1)*abs(pmouseY - mouseY)*0.5 + random(-1, 1);
					this.x = 0 + this.xrand;
					this.y = mouseY + this.yrand;
				}
				//position 5
				else if(mouseX > width && mouseY > 0 && mouseY < height){
					this.xrand = this.xrand + random(-1,1)*abs(pmouseX - mouseX)*0.5 + random(-1, 1);
					this.yrand = this.yrand + random(-1,1)*abs(pmouseY - mouseY)*0.5 + random(-1, 1);
					this.x = width + this.xrand;
					this.y = mouseY + this.yrand;
				}
				//position 6--works
				else if(mouseX < 0 && mouseY > height){
					this.x = 0 + random(-1, 1);
					this.y = height + random(-1, 1);
				} 
				//position 7
				else if(mouseY > height && mouseX > 0 && mouseX < width){
					this.xrand = this.xrand + random(-1,1)*abs(pmouseX - mouseX)*0.5 + random(-1, 1);
					this.yrand = this.yrand + random(-1,1)*abs(pmouseY - mouseY)*0.5 + random(-1, 1);
					this.x = mouseX + this.xrand;
					this.y = height + this.yrand;
				}
				//position 8--works
				else if(mouseX > width && mouseY > height){
					this.xrand = this.xrand + random(-1,1)*abs(pmouseX - mouseX)*0.5 + random(-1, 1);
					this.yrand = this.yrand + random(-1,1)*abs(pmouseY - mouseY)*0.5 + random(-1, 1);
					this.x = width + this.xrand;
					this.y = height + this.yrand;
					// this.x = width + random(-1, 1);
					// this.y = height + random(-1, 1);
				}
				else {		//if the mouse is within the canvas
					//abs(pmouseX - mouseX) is essentially the speed of the mouse in the x-direction
					this.xrand = this.xrand + random(-1,1)*abs(pmouseX - mouseX)*0.5 + random(-1, 1);
					this.yrand = this.yrand + random(-1,1)*abs(pmouseY - mouseY)*0.5 + random(-1, 1);
					this.x = mouseX + this.xrand;
					this.y = mouseY + this.yrand;
				}
			}
		}
	}
}

function draw() {
	background(0);
	for(var i = 0; i < bubbles.length; i++){
		bubbles[i].move();
		bubbles[i].display()
	}
}

//on mouse click, restart bubbles 
function mouseClicked(){
	background(0);

	for(var i = 0; i < bubbles.length; i++){
		bubbles[i].x = 300; 
		bubbles[i].y = 200;
		bubbles[i].xrand =  0;
		bubbles[i].yrand = 0;
		bubbles[i].move();
		bubbles[i].display();
	}
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}