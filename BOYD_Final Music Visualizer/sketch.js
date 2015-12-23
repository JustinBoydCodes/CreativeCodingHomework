function setup() {
  createCanvas(500, 500); //WEBGL);
  img = loadImage("./data/Bubble Color.jpg")
}

function draw() {
  background(0,255,255);
  //rotateX(frameCount *0.01);
  //rotateZ(frameCount *0.01);
  fill(img);
  
  ellipse(56, 46, 55, 55);
  //texture(img);
  //sphere(50,48);
}