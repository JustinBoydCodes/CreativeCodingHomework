var Numsines = 19; //how many sines?
var sines = new Array(Numsines); // array of the angles
var rad; // the initial radial for the central sine
var i; // counter
var oscs = new Array(Numsines); // the oscillators

var fund = 0.002; // speed
var ratio = .5; // multiplier for speed
var alpha = 100;

var trace = false;

var pitches = [59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95]; // whole-tone scale from B

function setup() 
{
  createCanvas(1280,720);
  background(255);
  rad = height/4; // distance of the sines away from each other
  
  
  for (i = 0; i<sines.length; i++)
  {
    sines[i] = PI; // everyone sine stars up
    oscs[i] = new p5.Oscillator();
    oscs[i].setType('sin');
    oscs[i].freq(midiToFreq(pitches[i]));
    oscs[i].amp(0.01);
    oscs[i].start(); 
  }
  
  
}

function draw() 
{
  if (!trace) 
  { 
    background(16,38,41); 
    stroke(100, 84, 0); //Pen color
    noFill();
  }
  
  push();//allows do stroke to run
  translate(width/2, (height/2)-200);// start drawing where?
  
  for (i = 0; i<sines.length; i++) //iterates through the sines 
  {
    oscs[i].amp((sin(sines[i]*14))*.2)// creates pulsing motion with amp
    var erad=0;
    if (trace) 
    {
      stroke(127, 255, 0*(float(i)/sines.length), alpha);
      fill(0, 0, 255, alpha/2);
      erad = 3.5*(1.0-float(i)/sines.length);
    }
    var radius = rad/(i+.75);//how big all the circles are
    rotate((sines[i]+3));
    if (!trace) ellipse(0, 0, radius*2/PI, radius*2/PI);
    push();
    translate(0,radius*PI);//moves where new sines are drawn
    if(!trace) ellipse(0,0,5,5);
    if (trace) ellipse(0, 0, erad*PI, erad/PI);
    pop();
    translate(PI,radius);
    sines[i] = (sines[i]+(fund+(fund*i*ratio)))%TWO_PI;
  }
  pop();
  
}
function keyReleased() //reveals the skeleton of the drawing 
{
  if (key==' ')
  {
    trace = !trace;
    background(40,54,77);//new background after change
  }
}