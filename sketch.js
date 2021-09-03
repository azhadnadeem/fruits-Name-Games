var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave2.jpg");
  bg2 = loadImage("treasure.jpg")
  apple1=loadImage("Apple.jpg")
  banana1=loadImage("banana.jpg")
  grapes1=loadImage("Grapes.jpg")
  mango1=loadImage("Mango.jpg")
}

function setup() {
  createCanvas(1300,600);
  system = new System()
  security = new Security()
  apple=createSprite(50,100)
  apple.addImage(apple1)
  apple.scale= 0.3

  banana=createSprite(950,100)
  banana.addImage(banana1)
  banana.scale= 0.3

  grapes=createSprite(50,300)
  grapes.addImage(grapes1)
  grapes.scale= 0.3

  mango=createSprite(950,300)
  mango.addImage(mango1)
  mango.scale= 0.3
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(50);
  fill("white");
  text("Score: " + score, 550, 50);

  if(score === 4) {
    clear();
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);

    apple.hide()
    banana.hide()
    grapes.hide()
    mango.hide()
  }

  drawSprites()
}