//Priyanka Makin, 07/19/2017
//ATLS3000 - Code, PC11
//For description, please see: www.priyankamakin.com/code/


// BreakUpText

var message = "bumble bees";
var letters; // // An array of Letter objects

//sound
var bee;

function preload(){
  bee = loadSound("Bee.mp3");
}

function setup() {
  //createCanvas(400, 400);
  createCanvas(windowWidth, windowHeight);
  textFont("Georgia", 40); // Load the font

  letters = []; // create the array the same size as the String

  // Initialize Letters at the correct x location
  var x = width/2-message.length * 11; // position in the middle
  for (var i = 0; i < message.length; i ++ ) {
    // Letter objects are initialized with their location within the String as well as what character they should display.
    letters[i] = new Letter(x, height/2, message.charAt(i)); 
    x += textWidth(message.charAt(i));
  }
}

function draw() {
  background(179, 217, 255);
  for (var i = 0; i < letters.length; i ++ ) {

    if(i%2 == 0){
      fill(255, 204, 0);
    } else {
      fill(0);
    }

    letters[i].display();  // Display all letters

    // If the mouse is pressed the letters shake
    // If not, they return to their original location
    if (mouseIsPressed) {
      letters[i].float();
    } else {
      letters[i].home();
    }
  }
}

function mousePressed(){
  bee.play();
}

function mouseReleased(){
  bee.stop();
}

function windowResize(){
  createCanvas(windowWidth, windowHeight);
}

