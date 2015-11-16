var x, y;
var currentangle = 270;
var step = 20;
var angle = 90;
var x1, y1;

function setup() {
  createCanvas(1280,720);
  background(84,171,71);
  stroke(0,0,0,255);
  
  x = width/2;
  y = height/2;
  
}

function draw() {
  if(key==' ')
  {
   background(84,171,71);
   x = width/2;
   y = height/2;
  }
  var r = random(0,255);
  var g = random(0,255);
  var b = random(0,255);
  var a = random(50,100);
  
  x1 = x+3*cos(radians(currentangle));
  x = constrain(x,0,width-10);
  y1 = y+3*sin(radians(currentangle));
  y = constrain(y,0,height-1);
  
  strokeWeight(30);
  stroke(r,g,b);
  line(x,y,x1,y1);
  
  //fill(r, g, b, a);
  //ellipse(x,y,20,20);
  
  x = x1;
  y = y1;
  
  if(x1>width) x1 = 0;
  if(x1<0) x1 = width;
  if(y1>height) y1 = 0;
  if(y1<0) y1 = height;
}

function keyTyped()
{
  console.log(key); // what key did we type?
  
  //if(key=='w') // draw forward
  //{
    //var r = random(0,255);
    //var g = random(0,255);
    //var b = random(0,255);
    //x1 = x+1;
    //y1 = x+1;
    // polar to cartesian transformation based on step and currentangle:
    //var x1 = x + step*cos(radians(currentangle));
    //var y1 = y + step*sin(radians(currentangle));
    //strokeWeight(20);
    //stroke(r, g, b);
    //line(x, y, x1, y1); // connect the old and the new
    // update the turtle's position:
    //x = x1;
    //y = y1;
  //}
  if(key=='a')
  {
   currentangle-=angle; // turn left
  }
  if(key=='d')
  {
   currentangle+=angle; // turn right
  }

}  