var ball
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,15,15)
 
}



function draw() 
{
  background(155);
drawSprites()
ball.velocityY=0
if(keyDown("up")){
  ball.velocityY = -1


}


}




