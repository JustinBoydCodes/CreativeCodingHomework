var usertext;
var thechapter;
var currentchapter = 0;
function preload(){
  usertext =loadStrings('./data/speech_cooked.txt');
}
function setup() {
  createCanvas(1000,1000);
  thechapter=usertext[currentchapter].split(' ');
}

function draw() {
  background(255);
  var xposition=20;
  var yposition=50;
  var tw = textWidth(usertext+'  ');
  if (xposition+tw>width)
  {
    xposition = 20;
    yposition = yposition+20;
  }
  fill(random(255),random(255),random(255));
  text(usertext+'  ',xposition,yposition);
  xpossition = xposition +tw;
}