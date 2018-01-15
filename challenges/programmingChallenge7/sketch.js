//Priyanka Makin, 06/26/2017
//ATLS3000 - Code, PC7
//For description, please see: www.priyankamakin.com/code/


function setup() {
  //createCanvas(400, 400);
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 20; i++) {
    var r = floor(random(0, dogs.length));
    dogpack[i] = new dog(dogs[r]);
  }
}

function draw() {
  background(0);
  for(var i =dogpack.length - 1; i >= 0; i--){
    dogpack[i].move();
    dogpack[i].display();
    if(dogpack[i].isGone()){
      //remove from array
      dogpack.splice(i, 1);
      //add new to array
      var r = floor(random(0, dogs.length));
      dogpack.push(new dog(dogs[r]));
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}