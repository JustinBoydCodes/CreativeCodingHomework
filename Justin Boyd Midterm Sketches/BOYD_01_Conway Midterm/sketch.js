//Order to chaos
var threshold = 128;
var howwide = 100;
var howtall = 100;
var img = new Array(2);
var whichimage = 0;

function preload()//load image to play game from
{
  img[0] = loadImage('./data/shape3.png');
  img[1] = loadImage('./data/shape1.png');
}
function setup() {
  createCanvas(500,500);
  noSmooth();
  randomize();
}

function draw() {
  tint(0,255,0);
  background(255,255,255);
  img[whichimage].loadPixels();
  img[1-whichimage].loadPixels();
  for (var i = 0; i <howwide; i++)
  {
    for (var j = 0; j < howtall; j++)
    {
      var p0 = img[whichimage].get(i-1, j-1)[0]>threshold; // upper left
      var p1 = img[whichimage].get(i, j-1)[0]>threshold; // upper mid
      var p2 = img[whichimage].get(i+1, j-1)[0]>threshold; // upper right
      var p3 = img[whichimage].get(i-1, j)[0]>threshold; // left
      var p4 = img[whichimage].get(i, j)[0]>threshold; // center pixel
      var p5 = img[whichimage].get(i+1, j)[0]>threshold; // right
      var p6 = img[whichimage].get(i-1, j+1)[0]>threshold; // lower left
      var p7 = img[whichimage].get(i, j+1)[0]>threshold; // lower mid
      var p8 = img[whichimage].get(i+1, j+1)[0]>threshold; // lower right
      var neighbors = p0+p1+p2+p3+p5+p6+p7+p8; // Total number of neighbors
      var result;
      if(p4==1)
      {
        if (neighbors==0 ) result = 1; else result = 0; // rule that creates square
      }
      else
      {
        if (neighbors==1) result = 1; else result = 0;
      }
      
      img[1-whichimage].set(i, j, color(result*165), color(result*165));
    }
  }
  img[1-whichimage].updatePixels();
  
  whichimage = 1-whichimage;
  image(img[whichimage], 0, 0, width, height);
}

function mouseClicked()
{
  fillatmouse();
}

function mouseDragged()
{
  fillatmouse();
}

function keyReleased() // blows out image
{
  randomize();
}

// this completely recreates the simulation with binary noise (cells are on or off)
function randomize()
{
  var randthresh = 3; // 30% of pixels will be dead.
  img[whichimage].loadPixels(); // load pixels into memory
  img[1-whichimage].loadPixels(); // load pixels into memory
  for (var i = 0; i < img[whichimage].width; i++) {
    for (var j = 0; j < img[whichimage].height; j++) {
      var r = random(10)>randthresh; // true or false?
      var thecolor = color(r*255);
      img[whichimage].set(i, j, thecolor, thecolor);
      img[1-whichimage].set(i, j, thecolor, thecolor);
    }
  }
  img[whichimage].updatePixels();
  img[1-whichimage].updatePixels();

}

// set a pixel at the mouse position to ON
function fillatmouse()
{
  img[whichimage].loadPixels();
  var thex = floor(mouseX/(width/howwide));
  var they = floor(mouseY/(height/howtall));
  img[whichimage].set(thex, they, color(255));
  img[whichimage].updatePixels();
}