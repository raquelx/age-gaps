var colorOn;
var colorOff;
var colorNow;

function setup() {
  createCanvas(500,500);
  colorOn = color("#3453E0");
  colorOff = color("#363F42");
  colorNow = colorOff;
}

function mouseClicked(){
  if (colorNow === colorOff){
    colorNow = colorOn;
  } else if (colorNow === colorOn){
    colorNow = colorOff;
  }
}

function draw() {
  background("#DCEDF2");
  noStroke();
  fill(colorNow);
  rect(mouseX - 115, mouseY - 45, 110, 40);
  
}