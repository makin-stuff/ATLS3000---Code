//Priyanka Makin, 06/28/2017
//ATLS3000 - Code, PC8
//For description, please see: www.priyankamakin.com/code/



//Have bubbles that have been clicked fade out and removed from the array
//Number of bubbles still needed to click on the top (count-down)
//Seconds timer on the bottom (count-up)
//Some kind of winner screen

var score = 0;
var counter = 0;

function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.r = 48;
  this.red = 255;
  this.green = 255;
  this.blue = 255;
  this.lifespan = 255;
  this.clicked = false;

  this.changeColor = function() {
    this.red = random(255);
    this.green = random(255);
    this.blue = random(255);
  }

  this.display = function() {
    noStroke();
    fill(this.red, this.green, this.blue, this.lifespan);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }

  this.clicker = function(){
    var distance = dist(mouseX, mouseY, this.x, this.y);
    if(distance < this.r){
      this.clicked = true;
      //  this.red = 0;
      // this.green = 0;
      //  this.blue = 0;
    }
  }

  this.update = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    if(this.clicked == true && this.lifespan > 0){
      this.lifespan = this.lifespan - 5;
      score++;
    }
  }

  // this.offscreen = function(){
  //   if(this.x < -this.r || this.x > width + this.r || this.y < -this.r || this.y > heigth + this.r){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}

var bubbles = [];

function convertDecaSeconds(time){
  var decaSec = time % 10; 
  var sec = floor((time%600)/10);
  var min = floor(time/600);


  return nf(min, 2) + ':' + nf(sec, 2) + ':' + nf(decaSec, 2);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(400, 400);

  for (var i = 0; i < 30; i++) {
    bubbles[i] = new Bubble(random(width), random(height));
  }

  //timer stuff
  function timeIt(){
    counter++;
  }
  //should be timeIt, 100
  setInterval(timeIt, 100);

}

function draw() {
  background(0);

  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();

    for (var j = 0; j < bubbles.length; j++) {
      if (i != j && bubbles[i].intersects(bubbles[j])) {
        bubbles[i].changeColor();
        bubbles[j].changeColor();
      }
    }
  }

  if(score == 1530){
      noLoop();
      fill(255);
      textSize(60);
      text("Winner!", width/2, height/2);
  }

  //timer
  textSize(40);
  fill(255);
  text(convertDecaSeconds(counter), width/2, 50);

  //score
  textSize(40);
  fill(255);
  text(ceil(score/51), width/2, height - 50);
  //console.log(score);
}


function mouseClicked(){
  for(var i = 0; i < bubbles.length; i++){
    bubbles[i].clicker();
  }
}


function windowResized(){
  createCanvas(windowWidth, windowHeight);
}