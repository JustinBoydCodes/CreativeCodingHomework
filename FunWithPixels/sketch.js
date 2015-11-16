var img;
function setup() {
  createCanvas(1280,720);
  img=createImage(5,5);
}

function draw() {
}
function mouseReleased()
{
  img.loadPixels();
  for (var i = 0; i <img.width; i++){
    for (var j = 0; j <img.height; j++){
      //var r = random(10)>5; //false white true black
      //var thecolor = color(r*255);
      var thecolor = color(random(255),random(255),random(255)) // for randoms
      img.set(i,j,thecolor);
    }
  }
  img.updatePixels();
  image(img,0,0, width,height);
}