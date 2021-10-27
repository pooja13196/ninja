var ninja , ninjaRunning , ninjaAttack1 , ninjaAttack2 ;
var bg ,bgImg ;
var Play , End;
var gameState = Play;
var enemy3 , enemy1 , enemy2;
var enemy1Img , enemy2Img , enemy3Img;
var enemy1Group , enemy2Group , enemy3Group ;

function preload(){
ninjaRunning =createImg("Running.gif");
ninjaAttack1 =createImg("Attack.gif");
ninjaAttack1.visible = false
ninjaAttack2 =createImg("Attack 2.gif");
ninjaAttack2.visible = false

enemy1Img = createImg("enemy1.gif")
enemy1.visible = false

enemy2Img = createImg("enemy2.gif")
enemy2.visible = false

enemy3Img = createImg("enemy3.gif")
enemy3.visible = false

bgImg =loadImage("bg.gif")

}

function setup() {
  createCanvas(1250,610);
  ninja = createSprite(150, 400, 50, 50);
  ninja.scale = 0.5

 // bg = createSprite(625,305,1250,610)
 // bg.addImage("bg",bgImg)

  ninja.addImage("ninjaAttact1",ninjaAttack1);
}

function draw() {
  background("white");  
  Spenemy1();
  Spenemy2();
  Spenemy3();
  drawSprites();
}

function Spenemy1(){

if (frameCount === 0){
 var enemy1 = createSprite(600,300,80,80)
  enemy1.addImage(enemy1Img)
  enemy1.velocityX = -5;
  enemy1.lifetime = 300
  enemy1Group.add(enemy1)
}

}

function Spenemy2(){

  if (frameCount === 0){
   var enemy2 = createSprite(600,300,80,80)
    enemy2.addImage(enemy2Img)
    enemy2.velocityX = -5;
    enemy2.lifetime = 300
    enemy2Group.add(enemy2)
  }
  
  }

function Spenemy3(){

  if (frameCount === 30){
   var enemy3 = createSprite(600,300,80,80)
    enemy3Group.addImage(enemy3Img)
    enemy3.velocityX = -5;
    enemy3.lifetime = 300
    enemy3Group.add(enemy3)
  }
  
  }

  