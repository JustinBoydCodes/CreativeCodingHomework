// directions and incrementation
var thestring = 'wdwawawdwdwdwawawdwawdwawawdwawdwawawdwdwdwawawdb';
var stringpos = 0;


// velocity and direction
var currentangle = 270; // going up
//var currentangle2 = 270; 
var step = 5; // Increment steps
var angle = 90; // Turn angle
//var angle2 = 90;

var x, y, x1, y1, x2, y2, x3, y3, r, g, b, a;
function setup() 
{
  createCanvas(1280,720);
  background(84,171,71); // Grass green background
  stroke(0,0,0,255);
  
  // Centered turtle
  x = width/2;
  y = height/2;
  
  xa = (width/2)-100;
  ya = (height/2);
  
  xb = (width/2)+100;
  yb = (height/2);
}

function draw() 
{
  // Rainbow Turtle
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
  a = random(50,100);


  driveturtle(thestring.charAt(stringpos)); // draw the current character
  stringpos = (stringpos+1) % thestring.length; // increment the current character
}

function keyTyped()
{
  driveturtle(key);
}

function driveturtle(k)
{
  if(k=='w')
   {
      var x2 = xb +step*cos(radians(currentangle));
      x2 = constrain(x2,0,width-1);
      var y2 = yb +step*sin(radians(currentangle));
      y2 = constrain(y2,0,height-1);
      strokeWeight(30);
      stroke(r,g,b);
      line(xb, yb, x2, y2);
      xb = x2;
      yb = y2;
      
      var x3 = xa + step*-1*cos(radians(currentangle));
      x3 = constrain(x3,0,width-1);
      var y3 = ya + step*sin(radians(currentangle));
      y3 = constrain(y3,0,height-1);
      strokeWeight(30);
      stroke(r,g,b);
      line(xa, ya, x3, y3);
      xa = x3;
      ya = y3;
   }
   else if(k=='d')
   {
    currentangle+=angle;
    //currentangle2+=angle2;
   }
   else if(k=='a')
   {
    currentangle-=angle; 
    //currentangle2-=angle2;
   }
   else if(k=='s')
   {
     currentangle=(currentangle)*-1;
   }
   else if(k=='e')
   {
     angle=(angle)+45;
   }
   else if(k=='q')
   {
      angle=(angle)-45;
   }
   else if(k=='c')
   {
     step=(step)+5;
   }
   else if(k=='z')
   {
     step=(step)-5;
   }
   else if(k=='b')
   {
    background(84,171,71,random(50));
   }
}