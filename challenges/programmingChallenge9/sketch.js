//Priyanka Makin, 07/01/2017
//ATLS3000 - Code, PC9
//For description, please see: www.priyankamakin.com/code/


var sun;
var mercury;
var earth;
var mars;
var jupiter;
var saturn;
var uranus;
var neptune;
var pluto;

var theta;

function preload(){
	sun = loadImage("sun.png");
	mercury = loadImage("mercury.png");
	venus = loadImage("venus.png");
	earth = loadImage("earth.png");
	mars = loadImage("mars.png");
	jupiter = loadImage("jupiter.png");
	saturn = loadImage("saturn.png");
	uranus = loadImage("uranus.png");
	neptune = loadImage("neptune.png");
	pluto = loadImage("pluto.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	//createCanvas(400, 400);
	imageMode(CENTER);
	ellipseMode(CENTER);
	theta = 0;
	frameRate(1000);
}

function draw() {
	background(0);
  	noStroke();
  	fill(255);

  	//draw the sun
  	translate(width/2, height/2);
    image(sun, 0, 0, 150, 150);


    push();
    	//draw mercury
    	rotate(radians(16*theta));
    	translate(80, 0);
    	image(mercury, 0, 0, 13, 13);
    pop();


    push();
    	//draw venus
    	rotate(radians(6.4*theta));
    	translate(110, 0);
    	image(venus, 0, 0, 22, 22);
    pop();

    push();
    	//draw earth
    	rotate(radians(4*theta));
    	translate(150, 0);
    	image(earth, 0, 0, 24, 24);

    	//draw moon
    	rotate(radians(2*theta));
    	translate(19, 0);
    	ellipse(0, 0, 7, 7);
    pop();

    push();
    	//draw mars
    	rotate(radians(2*theta));
    	translate(202, 0);
    	image(mars, 0, 0, 18, 18);

    	//draw phobos
    	push();
    		rotate(radians(2*theta));
    		translate(15, 0);
    		ellipse(0, 0, 5, 5);
    	pop();

    	//draw deimos
    	push();
    		rotate(radians(-3*theta));
    		translate(21, 0);
    		ellipse(0, 0, 3, 3);
  		pop();

    pop();

    push();
    	//draw jupiter
    	rotate(radians(0.32*theta));
    	translate(290, 0);
    	image(jupiter, 0, 0, 52, 52);

    	//draw ganymede
    	push();
    		rotate(radians(3*theta));
    		translate(35, 0);
    		ellipse(0, 0, 13, 13);
    	pop();

    	//draw callisto
    	push();
    		rotate(radians(5*theta));
    		translate(49, 0);
    		ellipse(0, 0, 10, 10);
    	pop();

    	//draw Io
    	push();
    		rotate(radians(-2*theta));
    		translate(61, 0);
    		ellipse(0, 0, 8, 8);
    	pop();

    	//draw Europa
    	push();
    		rotate(radians(1.5*theta));
    		translate(70, 0);
    		ellipse(0, 0, 7, 7);
    	pop();

    pop();

    push();
    	//draw saturn
    	rotate(radians(0.12*theta));
    	translate(430, 0);
    	image(saturn, 0, 0, 88, 33);

    	//draw Titan
    	push();
    		rotate(radians(-4*theta));
    		translate(50, 0);
    		ellipse(0, 0, 9, 9);
    	pop();

    pop();

    push();
    	//draw uranus
    	rotate(radians(0.04*theta));
    	translate(515, 0);
    	image(uranus, 0, 0, 32, 32);

    	//draw ariel
    	push();
    		rotate(radians(-2*theta));
    		translate(22, 0);
    		ellipse(0, 0, 7, 7);
    	pop();

    	//draw umbriel
    	push();
    		rotate(radians(-6*theta));
    		translate(31, 0);
    		ellipse(0, 0, 6, 6);
    	pop();

    	//draw titiana
    	push();
    		rotate(radians(3*theta));
    		translate(38, 0);
    		ellipse(0, 0, 4, 4);
    	pop();

    	//draw oberon
    	push();
    		rotate(radians(-theta));
    		translate(43, 0);
    		ellipse(0, 0, 3, 3);
    	pop();

    pop();

    push();
    	//draw neptune
    	rotate(radians(0.024*theta));
    	translate(590, 0);
    	image(neptune, 0, 0, 33, 33);

    	//draw triton
    	push();
    		rotate(radians(2*theta));
    		translate(25, 0);
    		ellipse(0, 0, 6, 6);
    	pop();

    pop();

    push();
    	//draw pluto
    	rotate(radians(0.016*theta));
    	translate(650, 0);
    	image(pluto, 0, 0, 10, 10);

    	//draw charon
    	push();
    		rotate(radians(-8*theta));
    		translate(9, 0);
    		ellipse(0, 0, 4, 4);
    	pop();

    pop();

    theta++;
}

function windowResized(){
	createCanvas(windowWidth, windowHeight);
}