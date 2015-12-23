var r, g, b, w, h;// Global Variables for color, width, and height
var env, delay;// For delay and envelope
var reverb;//reverb
var d;//incrementing number
var i=1;//starting increment

var thepitches = [56, 58, 60, 63, 65, 68, 70, 72, 75, 77, 80, 82, 84, 87, 89, 92,];//Array  of Midi note numbers to convert to pitches

function setup() {
  createCanvas(1280,720);
  background(255);
  
  osc = new p5.Oscillator();
  osc.setType('triangle');
  osc.freq(415.3046975799);
  osc.amp(0);
  osc.start();
  
  rectMode(CENTER);
  
  d=random(5,25);

  delay = new p5.Delay();// From p5.js reference

  // delay.process() accepts 4 parameters:
  // source, delayTime, feedback, filter frequency
  delay.process(osc, .25, .7, 2300);
  
  // play the noise with an envelope,
  // a series of fades ( time / value pairs )
  env = new p5.Env(.01, 0.2, .2, .1);
}

// mouseClick triggers envelope
function mouseClicked() {
  // is mouse over canvas?
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    env.play(osc);
  }
  reverb = new p5.Reverb();
  reverb.process(osc, 5, 1);
}
function draw() {
  if(mouseIsPressed)
  {
  fill(r, g, b); // my colors
  triangle(mouseX-36-d, mouseY+40-d, mouseX, mouseY-5-(2*d), mouseX+36+d, mouseY+40-d);//Creates centered triangle that grows by d
  d = d+i;//increments d
  if(d>25 || d<0) i = i*-1; // d above 100 OR d below 0/ loops it to grow and shrink

  r = floor((r+1)%256); // floor=ignores the stuff after the decimal
  g = floor((g+1)%256);
  b = floor((b+1)%256);
  //creates color palette
  r=random(0,255);
  g=0
  b=random(0,255);
  //sets limit on how big or small rectangles can be
  w=random(10,100);
  h=random(10,100);
  
  fill(r,g,b,100);//fills rectangles with random colors
  stroke(0,25);//creates an alpha stroke
  rect(mouseX+random(-100,100), mouseY+random(-100,100), w, h);//creates rectangles that follow mouse
 
  var p = floor(map(mouseX, 0, width-1, 0, 16));//maps the pitches to mouse on screen
  p = constrain(p, 0, 15); // safety check so that above doesn't reach 16
  //var f = map(mouseX, 0, width-1, 415.305, 830.61); was for mapping pitch
  var f = midiToFreq(thepitches[p]);//converts midi notes in array to frequencies
    osc.freq(f);//calls oscillator to play pitch
    var a = 1.0-(mouseY/(height-1));//programs amplitude to follow y direction 
    osc.amp(a, 0.05); // turn up sine wave
  }
  else {
    osc.amp(0, 0.05); // turn down sine wave
  }
}
//turns screen white
function keyPressed()
{ 
  if(key==' ') background(255);
}
//turns screen black and then applies new blendmode
function keyReleased()
{
  if(key==' ') background(0);
  blendMode(SCREEN);
}