var p1;
var p1b;
var p2;
var p2b;
var p4;
var p4b;

var barwidth = 64;
var currentgirl;
var barcolor;
var baseline;
var origin = 180;
var marginL = 50

function setup() {
  createCanvas(2400, 800);
  rectMode(CENTER);
  p1 = loadImage("img/pngs/p1.svg");
  p1b = loadImage("img/pngs/p1b.svg");
  currentgirl = p1;
  blueBasic = color('#2E3192');
  blueSelect = color('#2D37BA');
  baseline = new SoftFloat(origin, .18, .4);
  
  // for (var r = 0; r < table.getRowCount(); r++) {
  //   var movie = {};
  //   movie.time = parseInt(table.getRow(r).get("year"));
  //   movie.gap = parseInt(table.getRow(r).get("gap"));
  //   movie.title = table.getRow(r).get("movie");
  //   movie.path = table.getRow(r).get("movieimg");
  //   movie.hovered = false;
  //   movie.x = lineGap;
  //   movie.y = height / 2;
  //   movie.prevx = movie.x;
  //   movie.prevy = movie.y;
  //   movie.targetX = null;
  //   movie.targetY = null;
  //   movie.id = r;
  //   movies.push(movie);
  // }

  // for (var i = 0; i < movies.length; i++) {
  //   moviesTemp.push(movies[i]);
  // }
}
  
  

function draw() {

  background(0);
  noStroke();
  baseline.update();
  
  if (mouseX > marginL + barwidth * .5 && mouseX < marginL + barwidth * 1.5){
  currentgirl = p1b;
  barcolor = blueSelect;
  baseline.setTarget(170);
  } else {
  currentgirl = p1;  
  barcolor = blueBasic;
  baseline.setTarget(180);
  }
  

  for(i=0; i<26; i++){
    image(currentgirl, marginL + 85 * i, baseline.get(), p1.width / 2.3, p1.height / 2.3);
    fill(barcolor);
    rect(marginL + barwidth, baseline.get() + 68 + 10 * i, barwidth, 6);  
  } 

    
  
}
