function dog(img) {
  this.x = random(0, 1500);
  this.y = -50;
  this.img = img;
  this.xrand = random(2, 4);
  this.yrand = random(2, 4);

  this.display = function() {
    image(this.img, this.x, this.y);
  }

  this.move = function() {
    this.x = this.x - this.xrand;
    this.y = this.y + this.yrand;

  }

  this.isGone = function(){
    if((this.x < -50 && this.y > 0) || (this.x > 0 && this.y > height+50)){
      return true;
    } else {
      return false;
    }
  }
}
