var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  bgImg = loadImage("assets/bg.jpeg")
  bulletimg=loadImage("assets/bullet.png")
  heart1img=loadImage("assets/heart_1.png")
  heart2img=loadImage("assets/heart_2.png")
  heart3img=loadImage("assets/heart_3.png")
  zombieimg=loadImage("assets/zombie.png")
  losesound=loadSound("assets/lose.mp3")
  winsound=loadSound("assets/win.mp3")
  explosionsound=loadSound("assets/explosion.mp3")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   heart1=createSprite(displayWidth-150,40)
   heart1.addImage(heart1img)
   heart1.scale=0.4
   heart1.visible=false

   heart2=createSprite(displayWidth-150,40)
   heart2.addImage(heart2img)
   heart2.scale=0.4
   heart2.visible=false

   heart3=createSprite(displayWidth-150,40)
   heart3.addImage(heart3img)
   heart3.scale=0.4
   heart3.visible=true

  bulletGroup=new Group()
  zombieGroup=new Group()

}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
enemy()
drawSprites();

}

function enemy(){
  if(frameCount%50===0){
    zombie=createSprite(random(500,1100),random(100,600))
    zombie.addImage(zombieimg)
    zombie.scale=0.15
    zombie.velocityX=-3
    zombie.lifetime=400
    zombieGroup.add(zombie)
  }
}