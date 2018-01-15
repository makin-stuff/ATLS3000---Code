// Letter Object

function Letter(x, y, letter) {
  // The object knows its original " home " location
  // As well as its current location
  this.homex = this.x = x;
  this.homey = this.y = y;
  this.letter = letter;

  //float variables
  this.xoff = 0;
  this.yoff = 0;
  this.xinc = random(-0.02, 0.02);
  this.yinc = random(-0.02, 0.02);

  // Display the letter
  this.display = function() {
    //fill(0);
    textAlign(LEFT);
    text(this.letter, this.x, this.y);
  }
  
  // Move the letter randomly
  this.float = function() {
    this.xoff += this.xinc;
    this.yoff += this.yinc;

    this.x = map(noise(this.xoff), 0, 1, 0, width);
    this.y = map(noise(this.yoff), 0, 1, 0, height);
    // this.x += random(-2,2);
    // this.y += random(-2,2);
  }
  
  // At any point, the current location can be set back to the home location by calling the home() function.
  this.home = function() { 
    this.x = this.homex;
    this.y = this.homey;
  }
}
