var bgimage;
var mimage;
var mario;
var trex,timage;

function preload(){
  bgimage = loadImage("background.jpg");
  mimage = loadImage("mario.jpg");
  timage = loadImage("trex.jpg");
}
function setup() {
  
  createCanvas(1200,800);
  mario = createSprite(400, 350, 50, 50);
  mario.addImage("mario",mimage);
  trex = createSprite(600, 200, 50, 50);
  trex.addImage("bird",timage);
  trex.scale=0.2;
}

function draw() {
  background(bgimage);  
  drawSprites();
}