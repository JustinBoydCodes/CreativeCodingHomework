//Generate a cooked text file
var usertext; // text file placeholder
var concatenation;
var currentsentence = 0;
var thesentence;
var thefont;
//var myVoice = new p5.Speech(); // Speak to me with html
function preload(){
  usertext = loadStrings('./data/GWBSoTU2002.txt');
  usertext2 = loadStrings('./data/speech_cooked.txt');
  thefont = loadFont('./data/Comic Sans MS.ttf');
}
function setup() {
  xwidth=1920
  yheight=1080
  createCanvas(xwidth,yheight);
  background(255);
  thesentence = usertext2[currentsentence].split(' ');
  var concatenation = ""; // the text in one string
  //concatenate whole book into one string
  for (var i = 0; i<usertext.length; i++)
  {
    concatenation+=usertext[i]+" ";
  }
  concatenation = concatenation.replace(/ terrorists/g, " cuddlekins");
  concatenation = concatenation.replace(/ Terrorists/g, " Cuddlekins");
  concatenation = concatenation.replace(/ Terror/g, " Love");
  concatenation = concatenation.replace(/ terror/g, " love");
  
  concatenation = concatenation.replace(/ America/g, " The Emaculent Empire");
  concatenation = concatenation.replace(/ American/g, " Oppressor");
  concatenation = concatenation.replace(/ Americans/g, " Oppressors");
  concatenation = concatenation.replace(/ American's/g, " Oppressor's");
  
  concatenation = concatenation.replace(/ war/g, " peace");
  concatenation = concatenation.replace(/ peace/g, " the apocalypse");
  
  concatenation = concatenation.replace(/ jobs/g, " slave tasks");
  concatenation = concatenation.replace(/ job/g, " slave task");
  concatenation = concatenation.replace(/ Jobs/g, " Slave Tasks");
  
  concatenation = concatenation.replace(/ budget/g, " spending spree");
  concatenation = concatenation.replace(/ Budget/g, " Spending Spree");
  
  concatenation = concatenation.replace(/ world/g, " galaxy");
  concatenation = concatenation.replace(/ World/g, " Galaxy");
  
  concatenation = concatenation.replace(/ congress/g, " the aristocracy");
  concatenation = concatenation.replace(/ Congress/g, " The Aristocracy");
  
  concatenation = concatenation.replace(/ weapons/g, " pillows");
  concatenation = concatenation.replace(/ weapon/g, " pillow");
  
  concatenation = concatenation.replace(/ our/g, " wees");
  concatenation = concatenation.replace(/ ours/g, " wees");
  
  concatenation = concatenation.replace(/ I/g, " me");
  concatenation = concatenation.replace(/ You/g, " Yous");
  concatenation = concatenation.replace(/ you/g, " yous");
  
  concatenation = concatenation.replace(/people/g, " peons");
  
  concatenation = concatenation.replace(/children/g, " offspring");
  
  concatenation = concatenation.replace(/ healthcare/g, " booboo-aid");
  
  concatenation = concatenation.replace(/ government/g, " tyranny");
  concatenation = concatenation.replace(/ Government/g, " Tyranny");
  
  concatenation = concatenation.replace(/ nation/g, " states");
  concatenation = concatenation.replace(/ Nation/g, " States");
  
  concatenation = concatenation.replace(/years/g, " eons");
  concatenation = concatenation.replace(/Years/g, " Eons");
  
  //view:
  console.log(concatenation);
  
  
  
  
  
  
  // strip leading and extra whitespace (regex):
  // a + will take into account repeats
  concatenation = concatenation.replace(/ +/g, " ");
  concatenation = concatenation.trim();
  var sentences = concatenation.split(/'.'+/);
  for(var i= 0;i<sentences.length;i++)
  {
    sentences[i] = sentences[i].trim();
  }
 
 saveStrings(sentences, "speech_cooked.txt");
 //myVoice.speak('Hello');
}

function draw() {
  frameRate(1/60)
  background(255);
  var xposition=20;
  var yposition=10;
  //textSize(18);
  textFont(thefont);
  for(var i = 0; i<thesentence.length;i++)
  {
    fill(random(255), random(255), random(255));
    var tw = textWidth(thesentence[i]+'  ');
    if(xposition+tw>width) // over the edge?
    {
      // yes... move the xposition back the left and move the y position up one line
      xposition = 20; // carriage return
      yposition = yposition + 20; // line feed
    }
    if(yposition+tw>width)
    {
      yheight + 20;
    }
    //var th = textHeight
    text(thesentence[i]+'  ',xposition,yposition); // Text wraps within text box
    xposition = xposition + tw;
    
  }
}
//function keyPressed( )
//{
 //myVoice.speak(thesentence); 
//}