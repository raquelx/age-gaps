var captions = ["zero",
          "Eileen Hurlee plays Queen Gertrude in Hamlet, and clocks in a full eleven years younger than Lawrence Olivier, cast as her son Hamlet. She would reprise her role as Gertude nearly two decades later, playing the mother of Richard Burton, who was younger than her, but only by seven years.",
				  "A Washington Post review of Alexander sums up this casting decision well: 'Then there's Angelina Jolie as Mom. Really, words fail me here.' The movie was nominated in six different categories for the 2004 Razzie Awards, including worst acting performances for Angelina Jolie and Colin Farrell.",
				  "Bye Bye Birdie",
				  "The Green Years",
				  "The Manchurian Candidate",
				  "Joey",
				  "Star Trek",
				  "North by Northwest is as perfect a movie as they come, so it's hard to criticizebut the seven year age gap between Cary Grant and Jessie Royce Landis is just silly.",
				  "Star Trek",
				  "Star Trek",
				  "Star Trek",
				  "Star Trek",
				  "Star Trek",
				  "Star Trek",
				  "Star Trek",
				  "Star Trek",
				  "Star Trek",
				  "Star Trek",
				  "Star Trek",
				  "Star Trek",
				  "Star Trek",
				  "Star Trek",
				  "This is an explainer paragraph with a little more background for the casting decisions and character roles"];

const lineGap = 80;
const ticHeight = 24;
var table;
var radius = 11;
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
var jump;



var slabGap = 2.7;
var featureGap = 15.25;
var p1;
var p1b;
var p2;
var p2b;
var p4;
var p4b;
var currentgirl;
var baseline = 584.5; // how far down on page faceview girls sit
var basefloat = 0; // soft float to shift up on hover
var origin = 0; // where float starts out

var faceY = 600;
var faceYneg = faceY - 14.2;
var spacer = 11.5;  // space between eyes
var eyesize = 6;    
var hairwidth = 20;
var hairHeight = 72;

const WIDTHFULL = 3700;
const WIDTHSHORT = 1000;

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
      if (abs(movies[m].x - mouseX) < .5*radius.get() && abs(movies[m].gap + faceY + 61 - mouseY) < 1.5 * radius.get() + 2 * m) { // if mouse is close to dot
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
    radius.setTarget(15);     // radius of dot on graph
    cornerRadius.setTarget(90);
    endpoint.setTarget(0);
    $('#labelblock #label').css('opacity', '0');
    for (var m = 0; m < movies.length; m++) {
      movies[m].targetX =
        map(movies[m].gapRank, 0, movies.length - 1, lineGap, WIDTHSHORT - lineGap);
      movies[m].targetY =
        map(movies[m].gap, 35, -35, vspace, height - vspace);
    } // GAPVIEW ENDS
    
  } else if (view === GAPVIEW) {
    view = FACEVIEW;
    endpoint.setTarget(0);
    radius.setTarget(63);  // length of rectangle
    cornerRadius.setTarget(0);
      for (var m = 0; m < movies.length; m++) {
      movies[m].targetX =
        map(movies[m].gapRank, 0, movies.length + 21, lineGap, WIDTHFULL);
      } 
  }
  

  dotposition.set(0);
  dotposition.setTarget(1);
  // console.log(dotposition.get());
  
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
  createCanvas(2600, 1080);
  rectMode(CENTER);
  p1 = loadImage("img/pngs/p2.svg");
  p1b = loadImage("img/pngs/p2b.svg");
  currentgirl = p1;

    
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
    // print(movies[i]);
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
  jump = new SoftFloat(0, .18, .4);
  
  for (var m = 0; m < movies.length; m++) { /// where dots initially show up on load
  movies[m].targetX =
    map(movies[m].gapRank, 0, movies.length - 1, lineGap, WIDTHSHORT - lineGap);
  movies[m].targetY =
    map(movies[m].gap, 35, -35, vspace, height - vspace);
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
  jump.update();
  
  if (view === GAPVIEW) {
    stroke(205, 210, 220);
    strokeWeight(2);
    line(lineGap, height / 2, WIDTHSHORT - lineGap, height / 2); // long horizontal line
    fill(255);
    noStroke();

    $('#movie-key #gap-label').css('opacity', '1.0');
    for (var m = 0; m < movies.length; m++) {
      if (movies[m].hovered){
        fill('#ffffff');  // highlight color
        stroke('#ffffff');
        line(movies[m].x, movies[m].y, movies[m].x, height/2);
        noStroke();
        textSize(18);   // movie gap number
        textAlign(LEFT);
        $('.fader').fadeIn(2000);
        $('#testtxt').text(captions[m]);
        
        if (movies[m].gap > 0){
          text("mom gave birth at " + movies[m].gap  , movies[m].x - 5.5, height/2 + 20);
          } else if (movies[m].gap <=0){
          text("mom gave birth at " + movies[m].gap  , movies[m].x - 5.5, movies[m].y + 30);
          }
        if (m != prevID) {
            $('#moviegif').attr('src', 'img/gif/' + movies[m].path);
            prevID = m;
        }                          
      } else {
        fill('#2549AF');         // DOT COLOR
      }  
      rect(movies[m].x, movies[m].y , radius.get(), radius.get(), cornerRadius.get());
    }

  } else if (view === FACEVIEW){

    fill(30);
    rect(0, baseline * 1.707, 6000, 700);
    $('.fader').fadeIn(2000);
    for (var m = 0; m < movies.length; m++) {
      if (movies[m].hovered){
        if (m != prevID) {
            $('#moviegif').attr('src', 'img/gif/' + movies[m].path);
            prevID = m;
        }                          
      } 
    }
    
    for (var m = 0; m < movies.length; m++) {
      
      push();
      if (movies[m].hovered === true && movies[m].negativeFace === false){
      currentgirl = p1b;
      origin = -4;
      jump.setTarget(-10);
      fill('#CDD9FC'); // BODY POSITIVE HIGHLIGHT
      } else if (movies[m].hovered === false && movies[m].negativeFace === false){
      currentgirl = p1; 
      origin = -0;
      jump.setTarget(0);
      fill('#2549AF'); // BODY POSITIVE                  
      } else if (movies[m].hovered === true && movies[m].negativeFace === true){
      currentgirl = p1b; 
      origin = -4;
      jump.setTarget(-10);
      fill('#CDD9FC'); // BODY NEGATIVE HIGHLIGHT              
      } else if (movies[m].hovered === false && movies[m].negativeFace === true){
      currentgirl = p1;
      origin = 0;
      jump.setTarget(0);
      fill('#2549AF'); // BODY NEGATIVE              
      }
    
    if (movies[m].gap > 0){  
          for(var j = 0; j < movies[m].gap; j++){
            rect(movies[m].x, - j * verticaloffset/slabGap + faceY + 45 + origin, radius.get(), 0.10* radius.get());
          }  // gap between head and body / gap between slabs // last value is slab height 
        } else if (movies[m].gap < 0){
          for(var j = 0; j < -movies[m].gap; j++){
            if (movies[m].gap == -1){
            fill('#776F93');
            rect(movies[m].x, -j * verticaloffset/slabGap + faceY + 63 + origin, radius.get(), 0.10* radius.get());  
            } else if (movies[m].gap == -11){
            fill('#776F93');
            rect(movies[m].x, -j * verticaloffset/slabGap + faceY + 285 + origin, radius.get(), 0.10* radius.get());  
            }
          }  // gap between head and body / gap between slabs 
        }
      pop();
              
      if (movies[m].gap > 0){  // drawing 0 and positive faces
      image(currentgirl, movies[m].x - 36.5, - j * verticaloffset/slabGap + baseline + 9 + origin, p1.width / 2.5, p1.height / 2.5);
      } else if  (movies[m].gap === 0){ // drawing zero face
      image(currentgirl, movies[m].x - 36.5, baseline + 4 + origin, p1.width / 2.5, p1.height / 2.5);
      } else if  (movies[m].gap < 0){ // drawing negative faces
      image(currentgirl, movies[m].x - 36.5, j * verticaloffset/slabGap + baseline + 2 + origin, p1.width / 2.4, p1.height / 2.4);
      }
    }
  }
  
    for (var m = 0; m < movies.length; m++) {
      
    movies[m].x = map(dotposition.get(), 0, 1, movies[m].prevx, movies[m].targetX);
    movies[m].y = map(dotposition.get(), 0, 1, movies[m].prevy, movies[m].targetY);

    }

}
