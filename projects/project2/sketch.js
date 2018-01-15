//Priyanka Makin, 07/25/2017
//ATLS3000 - Code, P2
//For description, please see: www.priyankamakin.com/code/


//Followed this tutorial: https://www.youtube.com/watch?v=SNpm4-_NflU

//DONE:
//1. add "score" and "game over" text 
//1b. can you give different points for shooting different aliens??
//2. sound effects

//THINGS I'D LIKE TO ADD IN THE FUTURE:
//3. fix overlapping sounds
//4. mother ship that comes around very rarely --> worth lots of points
//4b. possibly add barriers like in original game
//5. star field in the background

//image variables
var shooter;
var spaceInvaderImages = [];

//sound variables
var shootSound;
var killSound;
var overSound;
var bla;

var score = 0;
var bulletCounter = 0;

var stars = [];

function preload(){
	//load the shooter image
	shooter = loadImage("cyberspaceinvader7.png");

	//load the space invader images
	for(var i = 0; i <= 6; i++){
		spaceInvaderImages[i] = loadImage("cyberspaceinvader" + (i) + ".png");
	}

	//load sounds
	//shootSound = loadSound("shoot.mp3");
	shootSound = loadSound("yass.mp3");
	//killSound = loadSound("dead.mp3");
	killSound1 = loadSound("do_it.aiff.m4a");
	killSound2 = loadSound("I'm_really_rich.wav");
	overSound = loadSound("gameOver.mp3");
	bla = loadSound("famous.mp3");
	//bla = loadSound("do_it.aiff.m4a");

}


//player --> actually shooter
var player = {
	x: 280,
	y: 370,
	width: 50,
	height: 10,
	draw: function(){
		image(shooter, this.x, this.y);
	}
}


function setup() {
	//createCanvas(800, 400);
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);

	//shooter starting point
	player.x = width/2;
	player.y = height - 50;

	//stars
	for(var i = 0; i < 800; i++){
		stars[i] = new Star();
	}
}

//bullets
var bullets = [];
function Bullet(I){
	I.active = true;
	I.x = player.x;
	I.y = player.y - 35;
	I.width = 7;
	I.height = 7;
	I.yvelocity = 7;

	I.inBounds = function(){
		return I.y >= 0 && I.y < height - I.height;
	}

	I.draw = function(){
		fill(255, 0, 0);
		rect(I.x, I.y, I.width, I.height);
	}

	I.update = function(){
		I.active = I.active && I.inBounds();
		I.y -= I.yvelocity;
	}

	return I;
}

//enemies --> space invaders
var enemies = [];
function Enemy(I){
	I.active = true;
	I.x = random(0, width);
	I.y = 0;
	I.width = 80;
	I.height = 50;
	I.yvelocity = 2;
	I.r = floor(random(0, 7));
	I.score = 0;
	//for perlin noise --> boss
	I.xoff = 0;
	I.yoff = 0;
	I.xinc = random(-0.05, 0.05);
	I.yinc = random(-0.05, 0.05);

	//score and speed are different for different aliens (space invaders)
	if(I.r == 0 || I.r == 1){
		I.score = 10;
		I.yvelocity = 2;
	} else if(I.r == 2 || I.r == 3){
		I.score = 20;
		I.yvelocity = 4;
	} else if(I.r == 4 || I.r == 5){
		I.score = 40;
		I.yvelocity = 5;
	} else if(I.r == 6){
		I.width = 100;
		I.score = 100;
	}

	I.inBounds = function(){
		return I.y >= 0 && I.y < height - I.height;
	}

	I.draw = function(){
		fill(255);
		noStroke();
		image(spaceInvaderImages[I.r], I.x, I.y);
	}

	I.update = function(){
		I.active = I.active && I.inBounds();
		if(I.r == 6){
			I.xoff += I.xinc;
			I.yoff += I.yinc;

			I.x = map(noise(I.xoff), 0, 1, 0, width);
			I.y = map(noise(I.yoff), 0, 1, 0, height);
		} else {
			I.y += I.yvelocity;
		}
	}
	return I;
}

//do two objects overlap??
function collision(thing1, thing2){
	return thing1.x + thing1.width >= thing2.x && thing1.x <= thing2.x + thing2.width && 
			thing1.y + thing1.height >= thing2.y && thing1.y <= thing2.y + thing2.height;
}

function draw() {
	background(0);

	//stars
	push();
		translate(width/2, height/2);
		for(var i = 0; i < stars.length; i++){
			stars[i].update();
			stars[i].show();
		}
	pop();

	//current score
	textSize(20);
	fill(255, 0, 0);
	text("score: " + score, 10, 30);

	player.draw();

	//user interaction -- key presses
	if(keyIsDown(LEFT_ARROW)){
		if(player.x >= 0)
			player.x -= 5;
		else
			player.x = 0;
	}
	if(keyIsDown(RIGHT_ARROW)){
		if(player.x + 5 < width - player.width)
			player.x += 5;
		else
			player.x = width - player.width;
	}
	//bulletCounter is for added delay between shots
	if(keyIsDown(32) && bulletCounter%8 == 0){
		bullets.push(Bullet({}));
		//console.log("shoot");
		shootSound.play();
	}

	bullets = bullets.filter(function(bullet){
		return bullet.active;
	});

	bullets.forEach(function(bullet){
		bullet.update();
		bullet.draw();
		//delete bullet from array if off-screen
		if(!bullet.inBounds()){
			//console.log("I've been spliced");
			bullets.splice();
		}
	});

	if(random() < 0.05){
		enemies.push(Enemy({}));
	}

	enemies = enemies.filter(function(enemy){
		return enemy.active;
	});

	enemies.forEach(function(enemy){
		enemy.update();
		enemy.draw();
		//delete enemy from array is off-screen
		if(!enemy.inBounds()){
			//console.log("I've been spliced");
			enemies.splice();
		}
	});

	//check to see if bullet hits an enemy
	bullets.forEach(function(bullet){
		enemies.forEach(function(enemy){
			if(collision(bullet, enemy)){
				bullet.active = false;
				enemy.active = false;
				if(bulletCounter%2 == 0){
					killSound1.play();
				} else {
					killSound2.play();
				}
				score = score + enemy.score;;
				//console.log(score);
			}
		});
	});

	//check to see if enemy hits player
	enemies.forEach(function(enemy){
		if(collision(enemy, player)){
			//stop the game
			noLoop();
			//console.log("GAME OVER");
			//textAlign(CENTER);
			textSize(45);
			fill(255, 0, 0);
			text("GAME OVER", width/2-100, height/2);
			bla.play();
		}
	});

	bulletCounter++;
}

function Star(){
	this.x = random(-width, width);
	this.y = random(-height, height);
	this.z = random(0, width);
	this.pz = this.z;

	this.update = function(){
		this.z = this.z - 10;
		if(this.z < 1){
			this.z = width;
			this.x = random(-width, width);
			this.y = random(-height, height);
			this.pz = this.z;
		}
	}

	this.show = function(){
		fill(255);
		noStroke();

		this.sx = map(this.x/this.z, 0, 1, 0, width);
		this.sy = map(this.y/this.z, 0, 1, 0, height);

		this.r = map(this.z, 0, width, 12, 0);
		ellipse(this.sx, this.sy, this.r, this.r);

		this.px = map(this.x/this.pz, 0, 1, 0, width);
		this.py = map(this.y/this.pz, 0, 1, 0, height);
		stroke(255);
		line(this.px, this.py, this.sx, this.sy);
	}
}

function windowResized(){
	createCanvas(windowWidth, windowHeight);
}