var umbrella, umbrellaImg
 var w, wImg

function preload(){
w=loadAnimation("base.gif")
umbrellaImg=loadImage("umbrella.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  umbrella = createSprite(1200,470,160,160)
umbrella.shapeColor = "red"
umbrella.addImage(umbrellaImg)
//umbrella.debug=true
umbrella.setCollider("circle",0,0,25)
umbrella.scale=2

  border=createSprite(650, 630, windowWidth+300, 40);
}

function draw() {
  background(255,255,255); 

  if(keyIsDown(RIGHT_ARROW)){
    umbrella.x = umbrella.x +2
  }

  if(keyIsDown(LEFT_ARROW)){
umbrella.x = umbrella.x -2
  }

if(keyDown('space')&&umbrella.y>450){
umbrella.velocityY = -13
}

//console.log(umbrella.y)

umbrella.velocityY+=0.8
  umbrella.collide(border)

  drawSprites();
}