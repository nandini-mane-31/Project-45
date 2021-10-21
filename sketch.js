var leftArrow,leftArrowImg;
var rightArrow,rightArrowImg;
var ball,ballImg;
var shooter,shooterImg;
var dice,diceImg;
var restart,restartImg;

function preload(){
 leftArrowImg = loadImage("left_arrow.png");
 rightArrowImg = loadImage("right_arrow.png");
 ballImg = loadImage("ball.png");
 shooterImg = loadImage("shooter.png");
 diceImg = loadImage("dice_roll.png");
 restartImg = loadImage("restart.png");
 
}

function setup(){
createCanvas(500,500);
 
 leftArrow = createSprite(100,480,50,50);
 leftArrow.addImage(leftArrowImg);
 leftArrow.scale = 0.1;

 rightArrow = createSprite(400,480,50,50);
 rightArrow.addImage(rightArrowImg);
 rightArrow.scale = 0.1;

 ball = createSprite(300,400,20,20);
 ball.addImage(ballImg);
 ball.scale = 0.1;

 shooter = createSprite(250,450,20,20);
 shooter.addImage(shooterImg);
 shooter.scale = 0.1;
 
 dice = createSprite(200,200,20,20);
 dice.addImage(diceImg);
 dice.scale = 0.05;

 restart = createSprite(10,20,50,50);
 restart.addImage(restartImg);
 restart.scale = 0.03;

}


function draw() {
  background('Blue');
  
  drawSprites();
 
}



