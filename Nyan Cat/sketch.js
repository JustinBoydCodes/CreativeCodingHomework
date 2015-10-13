function setup() {
  createCanvas (1280,720);
  
  background(12,65,219)
  rectMode(CENTER)
}

function draw() {
  if(mouseIsPressed)
  {
    fill(255,222,173);
    rect(mouseX+15,mouseY+50,90,80)
    fill(255,20,147);
    rect(mouseX+15,mouseY+50,80,60,15,15,15,15);
    fill(127);
    ellipse(mouseX+50,mouseY+60,50,50);
    background(12,65,219,5);
    stroke(255,0,0);
    strokeWeight(18);
    line(pmouseX,pmouseY,mouseX,mouseY);
    stroke(255,127,0);
    strokeWeight(18);
    line(pmouseX,pmouseY+18,mouseX,mouseY+18);
    stroke(255,255,0);
    strokeWeight(18);
    line(pmouseX,pmouseY+36,mouseX,mouseY+36);
    stroke(0,255,0);
    strokeWeight(18);
    line(pmouseX,pmouseY+54,mouseX,mouseY+54);
    stroke(0,0,255);
    strokeWeight(18);
    line(pmouseX,pmouseY+62,mouseX,mouseY+62);
    stroke(75,0,130);
    strokeWeight(18);
    line(pmouseX,pmouseY+80,mouseX,mouseY+80);
    stroke(143,0,255);
    strokeWeight(18);
    line(pmouseX,pmouseY+98,mouseX,mouseY+98);
    
  }
}