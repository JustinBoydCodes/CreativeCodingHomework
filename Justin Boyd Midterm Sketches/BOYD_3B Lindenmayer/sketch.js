//Box Fractal
var x, y;
var currentangle = 0;
var step = 20;
var angle = 90;

var axiom = "A";
var numloops = 4;
var therules = [];
therules[0] = ['A','-AF+BFB−FA−FB+FBF+F−F−F+FF+F-F-FF+F+F-FF-F+F+F-F'];
therules[1] = ['B','+BF+AFA−FB−FA+FAFF+F+F+F+FFFF+F++F+FFF+F+F+F+F+F-F'];
var whereinstring = 0;

function setup() 
{
  createCanvas(1000,1000);
  background(245,246,234);
  stroke(76,94,61);
  
  x=width/2
  y=height/2
  
  for(var i = 0;i<numloops;i++)
  { 
    axiom = lindenmayer(axiom);
  }
  console.log(axiom);
}

function draw() {
  drawIt(axiom.charAt(whereinstring));
  
  whereinstring++;
  if(whereinstring>axiom.length-1) whereinstring = 0;
}

function lindenmayer(s)
{
  var outputstring = ''; // start a blank output string
  
  // go through the string, doing rewriting as we go
  
  // iterate through 'therules' looking for symbol matches:
  for(var i=0;i<s.length;i++) // every symbol in 's'
  {
    var ismatch = 0; // by default, no match
    for(var j = 0;j<therules.length;j++) // every rule in 'therules'
    {
      if(s.charAt(i)==therules[j][0]) // MATCH!
      {
        outputstring+=therules[j][1]; // write substitution
        ismatch = 1; // we have a match, so don't copy over symbol
        break; // get outta this for() loop
      }
    }
    // if nothing matches in 'therules' array, just copy the symbol over.
    if(ismatch===0) outputstring+= s.charAt(i); 
  }
  
  return(outputstring); // send out the modified string
}

// this is a custom function that draws turtle commands
function drawIt(k)

{
  if(k=='F') // draw forward
  {
    // polar to cartesian transformation based on step and currentangle:
    var x1 = x + step*cos(radians(currentangle));
    var y1 = y + step*sin(radians(currentangle));
    strokeWeight(30);
    stroke(random(255),random(255),random(255));
    line(x, y, x1, y1); // connect the old and the new
    // update the turtle's position:
    x = x1;
    y = y1;
  }
  else if(k=='+')
  {
   currentangle+=angle; // turn left
  }
  else if(k=='-')
  {
   currentangle-=angle; // turn right   
  }

}