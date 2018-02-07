const lineGap = 80;
const ticHeight = 24;
var table;
var radius = 15;
var cornerRadius = radius;
var terminal = 10;
var vspace = 80;
var gapmin = 0;
var gapmax = 0;
var timeView = true;
var movies = [];
var moviesTemp = [];
var sorted = [];
var verticaloffset = 30;
var endpoint = terminal;
var hovered = false;
var negativeFace = false;
var dotposition = 0; // for soft float of X Y dot position
var moviepic;
var gifLoad = false;
var prevID = null;
var spacer = 11.5;
var eyesize = 6;
var hairwidth = 20;
var hairHeight = 72;
var faceY = 650;
var faceYneg = faceY - 14.2;
var slabGap = 1.85;
var featureGap = 15.25;

const WIDTHFULL = 8000;
const WIDTHSHORT = 1300;


// var img1945;
// var img2015;



const GAPVIEW = 0;
const FACEVIEW = 1;

var view = GAPVIEW;


function mouseMoved() {
  for (var m = 0; m < movies.length; m++) {
    if (view === GAPVIEW){
      if (abs(movies[m].x - mouseX) < .7*radius.get() && abs(movies[m].y - mouseY) < .9*radius.get()) { // if mouse is close to dot
        $('#movie-key #movie-title').text(movies[m].title);
        $('#movie-key #movie-time').text("(" + movies[m].time + ")");
        $('#movie-key #gap-label').text(movies[m].gap);
        movies[m].hovered = true;
      } else {
        movies[m].hovered = false;
      }
    } else if (view === FACEVIEW){
      if (abs(movies[m].x - mouseX) < .7*radius.get() && abs(movies[m].gap + faceY + 61 - mouseY) < 1.5 * radius.get() + 2 * m) { // if mouse is close to dot
        $('#movie-key #movie-title').text(movies[m].title);
        $('#movie-key #movie-time').text("(" + movies[m].time + ")");
        $('#movie-key #gap-label').text(movies[m].gap);
        movies[m].hovered = true;
      } else {
        movies[m].hovered = false;
      }
      if (movies[m].gap >= 0){
        movies[m].negativeFace = false;
      } else {
        movies[m].negativeFace = true;
      }
    }
  }

}


function mouseClicked() {
  if (view === FACEVIEW) {
    view = GAPVIEW;
    radius.setTarget(10);
    cornerRadius.setTarget(40);
    endpoint.setTarget(0);
    $('#labelblock #label').css('opacity', '0');
    for (var m = 0; m < movies.length; m++) {
      movies[m].targetX =
        map(movies[m].gapRank, 0, movies.length - 1, WIDTHSHORT - lineGap, lineGap);
      movies[m].targetY =
        map(movies[m].gap, 35, -35, vspace, height - vspace);
    } // GAPVIEW ENDS
    
  } else if (view === GAPVIEW) {
    view = FACEVIEW;
    endpoint.setTarget(0);
    radius.setTarget(64);
    cornerRadius.setTarget(0);
      for (var m = 0; m < movies.length; m++) {
      movies[m].targetX =
        map(movies[m].gapRank, 0, movies.length + 21, lineGap, 5500);
      } 
  }
  

  dotposition.set(0);
  dotposition.setTarget(1);
  console.log(dotposition.get());
  
  for (var m = 0; m < movies.length; m++) {
    movies[m].prevx = movies[m].x;
    movies[m].prevy = movies[m].y;
  }
}

function preload() {
  table = loadTable("movieTable.csv", "csv", "header");
  // moviepic = loadImage("img/winona&spock.jpg");
}

function setup() {
  createCanvas(4000, 1080);
  rectMode(CENTER);
  // img1945 = loadImage("img/1945.svg");
  // img2015 = loadImage("img/1945.svg");

  for (var r = 0; r < table.getRowCount(); r++) {
    var movie = {};
    movie.time = parseInt(table.getRow(r).get("year"));
    movie.gap = parseInt(table.getRow(r).get("gap"));
    movie.title = table.getRow(r).get("movie");
    movie.path = table.getRow(r).get("movieimg");
    movie.hovered = false;
    movie.x = lineGap;
    movie.y = height / 2;
    movie.prevx = movie.x;
    movie.prevy = movie.y;
    movie.targetX = null;
    movie.targetY = null;
    movie.id = r;
    movies.push(movie);
    // movie.gapMap = map(movie.gap, -11, 17, 0, 28);
  }

  for (var i = 0; i < movies.length; i++) {
    moviesTemp.push(movies[i]);
  }

  moviesTemp.sort(
    function(a, b) {
      return a.gap - b.gap;
    }
  );

  for (var i = 0; i < moviesTemp.length; i++) {
    movies[moviesTemp[i].id].gapRank = i;
  }

  dotposition = new SoftFloat(0, 0.2, 0.2);
  radius = new SoftFloat(15, 0.2, 0.2);
  cornerRadius = new SoftFloat(15, 0.2, 0.2);
  endpoint = new SoftFloat(terminal, 0.1, 0.5);
  
  for (var m = 0; m < movies.length; m++) {
  movies[m].targetX =
    map(movies[m].time, 1945, 2015, WIDTHSHORT - lineGap, lineGap);
  movies[m].targetY =
    map(movies[m].gap, -20, 20, height - vspace, vspace);
  }
  dotposition.setTarget(1);
  // print(movies);
}
  
  

function draw() {

  background(0);
  radius.update();
  cornerRadius.update();
  endpoint.update();
  dotposition.update();

  if (view === GAPVIEW) {
    
    $('.moviepic').css('display', 'block');
    for (var m = 0; m < movies.length; m++) {
      if (movies[m].hovered){
        fill('#ffffff');             // highlight color
        if (m != prevID) {
            $('#moviegif').attr('src', 'img/gif/' + movies[m].path);
            prevID = m;
        }                           // prevID = m;

      } else {
        fill('#8e124f');         // FACE no highlight color
      }  
      rect(movies[m].x, movies[m].y , radius.get(), radius.get(), cornerRadius.get());
      
    }
    stroke(205, 210, 220);
    strokeWeight(2);
    line(lineGap, height / 2, WIDTHSHORT - lineGap, height / 2); // long horizontal line
    fill(255);
    noStroke();

  } else if (view === FACEVIEW){
    
    $('.moviepic').css('display', 'none');
    
    for (var m = 0; m < movies.length; m++) {
      
      push();
      if (movies[m].hovered === true && movies[m].negativeFace === false){
        fill('#6edbf6');             // BODY POSITIVE HIGHLIGHT
      } else if (movies[m].hovered === false && movies[m].negativeFace === false){
      fill('#04b5e1');               // BODY POSITIVE               
      } else if (movies[m].hovered === true && movies[m].negativeFace === true){
      fill('#2ba0fa');               // BODY NEGATIVE HIGHLIGHT
      } else if (movies[m].hovered === false && movies[m].negativeFace === true){
      fill('#0278e6');               // BODY NEGATIVE
      }
    
      //   if (movies[m].hovered === true && movies[m].negative === false){
      //   fill('#6edbf6');             // BODY POSITIVE highlight color
      // } else if (movies[m].hovered === false && movies[m].negative === false) {
      //   fill('#04b5e1');             // BODY POSITIVE
      // } else if (movies[m].hovered === true && movies[m].negative === true) {                              
      //   fill('#1474e9');            // BODY NEGATIVE HIGHLIGHT
      // } else if (movies[m].hovered === false && movies[m].negative === true){
      //   fill('#0467e1');            // BODY NEGATIVE 
      // }
    
    
      if (movies[m].gap > 0){  
        for(var j = 0; j < movies[m].gap; j++){
          rect(movies[m].x, + movies[m].gap - j * verticaloffset/slabGap + faceY+61, radius.get(), 0.19* radius.get());
         
        }  // gap between head and body / gap between slabs // last value is slab height 
      } else {
        for(var j = 0; j < -movies[m].gap; j++){
          rect(movies[m].x, - j * verticaloffset/slabGap + faceY + 61, radius.get(), 0.19* radius.get());
        }  // gap between head and body / gap between slabs 
      }
      pop();
    
      if (movies[m].hovered === true && movies[m].negativeFace === false){
          fill('#DCDDE3');             // FACE POSITIVE highlight color
          } else if (movies[m].hovered === false && movies[m].negativeFace === false) {
          fill('#B8BACF');             // FACE POSITIVE 
          } else if (movies[m].hovered === true && movies[m].negativeFace === true) {
          fill('#DCDDE3');             // FACE NEGATIVE highlight color 
          } else if (movies[m].hovered === false && movies[m].negativeFace === true) {
          fill('#B8BACF');             // FACE NEGATIVE
          }
            
    if (movies[m].gap > 0){  // drawing 0 and positive faces
    rect(movies[m].x, movies[m].gap - j * verticaloffset/slabGap + faceY+37, radius.get(), radius.get()*.7, cornerRadius.get());
    // FACE FEATURES HERE
    fill(60, 70, 70); // eyecolor
    ellipse(movies[m].x-spacer, -movies[m].gap*featureGap + faceY+35, eyesize, eyesize);
    ellipse(movies[m].x+spacer, -movies[m].gap*featureGap + faceY+35, eyesize, eyesize);
    fill('#8e124f'); //hair color
    arc(movies[m].x, movies[m].gap - j * verticaloffset/slabGap + faceY+6.5, 63, 40, TWO_PI, PI);  
    rect(movies[m].x - 2.41*spacer,      movies[m].gap - j * verticaloffset/slabGap + faceY+43, 9, hairHeight);
    rect(movies[m].x + 3.35*spacer - 10, movies[m].gap - j * verticaloffset/slabGap + faceY+43, 9, hairHeight);
    fill('#cc59da');  // nose color
    triangle(movies[m].x - spacer/3.5, -movies[m].gap*featureGap + faceY+40,
           movies[m].x, -movies[m].gap*featureGap + faceY+34,
           movies[m].x + spacer/3.5, -movies[m].gap*featureGap + faceY+40);
      if (movies[m].hovered){
      fill('#705560'); //open mouth
      ellipse(movies[m].x, movies[m].gap - j * verticaloffset/slabGap + faceY+50, 1.2*eyesize, 1.2*eyesize);
    } else {
      noFill();
      stroke('#b56997'); //smile color
      strokeWeight(2);
      arc(movies[m].x, movies[m].gap - j * verticaloffset/slabGap + faceY+46, 10, 8, TWO_PI, PI);    
      noStroke();
    }
           
    } else { // drawing negative faces
   rect(movies[m].x, abs(movies[m].gap) - j * verticaloffset/slabGap + faceY+37, radius.get(), radius.get()*.7, cornerRadius.get());
    // FACE FEATURES HERE
    fill(60, 70, 70); // eyecolor
    ellipse(movies[m].x-spacer, -abs(movies[m].gap*featureGap) + faceY+35, eyesize, eyesize);
    ellipse(movies[m].x+spacer, -abs(movies[m].gap*featureGap) + faceY+35, eyesize, eyesize);
    fill('#8e124f'); //hair color
    arc(movies[m].x, movies[m].gap - j * verticaloffset/slabGap + faceY+6.5, 63, 40, TWO_PI, PI); 
    rect(movies[m].x - 2.41*spacer,      abs(movies[m].gap) - j * verticaloffset/slabGap + faceY+43, 9, hairHeight);
    rect(movies[m].x + 3.35*spacer - 10, abs(movies[m].gap) - j * verticaloffset/slabGap + faceY+43, 9, hairHeight);
    fill('#cc59da');  // nose color
    triangle(movies[m].x - spacer/3.5, -abs(movies[m].gap*featureGap) + faceY+40,
           movies[m].x, -abs(movies[m].gap*featureGap) + faceY+34,
           movies[m].x + spacer/3.5, -abs(movies[m].gap*featureGap) + faceY+40);
      if (movies[m].hovered){
      fill('#705560'); //open mouth
      ellipse(movies[m].x, abs(movies[m].gap) - j * verticaloffset/slabGap + faceY+50, 1.2*eyesize, 1.2*eyesize);
    } else {
      noFill();
      stroke('#b56997'); //smile color
      strokeWeight(2);
      arc(movies[m].x, abs(movies[m].gap) - j * verticaloffset/slabGap + faceY+46, 10, 8, TWO_PI, PI);    
      noStroke();
      }   
    }
    

      
    
    }

  }
  
    for (var m = 0; m < movies.length; m++) {
      
    movies[m].x = map(dotposition.get(), 0, 1, movies[m].prevx, movies[m].targetX);
    movies[m].y = map(dotposition.get(), 0, 1, movies[m].prevy, movies[m].targetY);

    }

}
