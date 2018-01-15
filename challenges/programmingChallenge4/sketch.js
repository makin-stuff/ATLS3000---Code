//Priyanka Makin, 06/14/2017
//ATLS3000 - Code, PC4
//For description, please see: www.priyankamakin.com/code/


function setup() {
  //createCanvas(400, 400);
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	strokeWeight(4);
  
	stroke(mouseX, abs(pmouseX - mouseX), mouseY);

  for(var i = 0; i <= height/75; i++){

  	//different starting locations
  	var rectXEven = 0;
  	var rectXOdd = 75;

  	for(var j = 0; j <= width/75; j++){
  		if((i%2) == 0 && (j%2) == 0){								//i is even
  			var rectY = 75*i;
  			noFill();
  			rect(rectXEven, rectY, 100, 100);
  			rectXEven += 150;
  		}
  		if((i%2) == 1 && (j%2) == 1){								//i is odd
  			var rectY = 75*i;
  			noFill();
  			rect(rectXOdd, rectY, 100, 100);
  			rectXOdd += 150;
  		}
  	}
  }
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}