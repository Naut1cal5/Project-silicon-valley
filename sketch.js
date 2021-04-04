var background,backgroundImage;
var blaster, blasterImage; 
var cartoonBoy, cartoonBoyImage;
var asteroid, asteroidImage;
var bullet,bulletImage;
function preload() {
  backgroundImage = loadImage ("Images/earthBackground.jpg")
  blasterImage = loadImage ("Images/blaster.png")
  cartoonBoyImage = loadImage ("Images/cartoonBoy.png")
  asteroidImage = loadImage ("Images/asteroid.png")
  bulletImage = loadImage ("Images/bullet.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background1 = createSprite (width/2,height/2,width,height)
  background1.addImage(backgroundImage)
  cartoonBoy = createSprite (width-250,height/2,width/2,height)
  cartoonBoy.addImage (cartoonBoyImage)
  blaster = createSprite (width-310,height/2,width/2,height)
  blaster.addImage (blasterImage)
  asteroid = createSprite (width-1000,height/2,width/2,height)
  asteroid.addImage (asteroidImage)
  bullet = createSprite (width-310,height/2,width/2,height)
  bullet.addImage (bulletImage)
 asteroid = createSprite ()
  cartoonBoy = createSprite ()
  blaster = createSprite ()
  cartoonBoy.scale = 0.3
 blaster.scale = 0.2
 asteroid.scale = 0.5
 bullet.scale = 0.5
}

function draw() {
  background(255,255,255);  
  cartoonBoy.y = mouseY
  blaster.x = cartoonBoy.x-40
  blaster.y =cartoonBoy.y
  blast()
  spawnbullets()
  drawSprites();
}
function blast () {
  if (frameCount % 60 === 0) {
    asteroid.y = Math.round(random(100,220));

    asteroid.velocityX = -3
    //adjust the depth
    asteroid.depth = asteroid.depth;
    asteroid.depth = asteroid.depth + 1;
    
    //add each cloud to the group
  
  }
}
function spawnbullets() {
  if(frameCount % 60 === 0) {
   
    //obstacle.debug = true;
    bullet.velocityX = -5;
    //assign scale and lifetime to the obstacle           
    //bullet.scale = 0.5;
  bullet.visible = false
  }
}

function shootBullet (){
  If(mousePressedOver (cartoonBoy))
    bullet.visible=true
    
  
  }
  
