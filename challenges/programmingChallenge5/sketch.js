//Priyanka Makin, 06/17/2017
//ATLS3000 - Code, PC5
//For description, please see: www.priyankamakin.com/code/


//can you make this start in the middle of the browser??
var ball = {
	x: 300,
	y: 300,
	xspeed: 5,
	yspeed: -6
};

//instead of changing the ball fill, change the background color?!
var ballFill = {
	r: 0,
	g: 0,
	b: 0
};

//left paddle
var lPaddle = {
	x: 35,
	y: 35
};

//right paddle
var rPaddle = {
	x:  35,
	y:  35
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	//createCanvas(400, 400);

	//left paddle starting point
	lPaddle.x = 35;
	lPaddle.y = 35;

	//right paddle starting point
	rPaddle.x = width - 50;
	rPaddle.y = height - 150;

	//ball starting point
	ball.x = width/2;
	ball.y = height/2;

	// //ball direction/speed
	// ball.xspeed = random(-4, 4);
	// ball.yspeed = random(-4, 4);
}



function draw() {

	//move left paddle
	//up = w
	if(keyIsDown(87) && lPaddle.y > 0){
		lPaddle.y -= 7;
	}
	//down = s
	if(keyIsDown(83) && lPaddle.y < height - 100){
		lPaddle.y += 7;
	}

	//move right paddle
	//up = up arrow
	if(keyIsDown(UP_ARROW) && rPaddle.y > 0){
		rPaddle.y -= 7;
	}
	//down = down arrow
	if(keyIsDown(DOWN_ARROW) && rPaddle.y < height - 100){
		rPaddle.y += 7;
	}

	background(0);
	moveBall();
	bounce();
	display();
}

function moveBall(){
	ball.x = ball.x + ball.xspeed;
	ball.y = ball.y + ball.yspeed;
}

function bounce(){

	//ball hits the l/r wall --> start over
	if (ball.x > width || ball.x < 0){
		ball.x = width/2;
		ball.y = height/2;
	}

	//ball hits right paddle
	if (ball.x + 12 >= rPaddle.x && ball.y >= rPaddle.y && ball.y <= rPaddle.y + 100){
		//change color
		if(ballFill.r >= 255)
			ballFill.r = 0;
		else
			ballFill.r += 50;
		//change speed/direction
		ball.xspeed = ball.xspeed * -1;
	}

	//ball hits left paddle
	if(ball.x <= 67 && ball.y >= lPaddle.y && ball.y <= lPaddle.y + 100){
		//change color
		if(ballFill.r >= 255)
			ballFill.r = 0;
		else
			ballFill.r += 50;
		//change speed/direction
		ball.xspeed = ball.xspeed * -1;
	}

	//ball hits top/bottom wall --> bounce
	if (ball.y > height || ball.y < 0){
		//change color
		if(ballFill.g >= 255)
			ballFill.g = 0;
		else
			ballFill.g += 50;
		//change speed/direction
		ball.yspeed = ball.yspeed * -1;
	}

	//what if the ball hits the top/bottom of a paddle??
}

function display(){
	
	//pong
	stroke(255);
	strokeWeight(4);
	fill(ballFill.r, ballFill.g, ballFill.b);
	ellipse(ball.x, ball.y, 24, 24);

	//left paddle
	stroke(255);
	strokeWeight(4);
	rect(lPaddle.x, lPaddle.y, 20, 100);

	//right paddle
	stroke(255);
	strokeWeight(4);
	rect(rPaddle.x, rPaddle.y, 20, 100);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}