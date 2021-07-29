// WHILE YOU GRADE/LOOK AT IT TRY CLICKING THE  PREVIEW/THINGY! ITS INTERACTIVE!



function setup() {
  createCanvas(windowWidth, windowHeight);

  
}

function draw() {
  
  
  
  if (mouseIsPressed) {
    background(0);
    stroke(255,163,163);
  } else {
    background('PALEVIOLETRED');
    stroke(255);
  }
  var step = 30;
  
  for(var x = 0; x<800; x=x+step){
    for(var y=0; y<800; y=y+step)
      {
        strokeWeight(1+x/step);
        line(x,y,x+(step/2),y+(step/2));
        strokeWeight(1+x/step/10);
        line(x+(step/2),y+(step/2),x+step,y+step);
      }
  }

  
}

function Module(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.a = 0;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}