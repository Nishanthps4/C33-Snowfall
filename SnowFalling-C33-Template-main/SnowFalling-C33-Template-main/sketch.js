var backgroundImg
var childImg, child
var snowflakeImg, snowflake
var snowflake2, snowflakeImg2;

function preload(){
  backgroundImg=loadImage("snow2.jpg");
  childImg=loadImage("winter_child.png");
  snowflakeImg=loadImage("snow4.webp");
  snowflakeImg2=loadImage("snow5.webp")
}

function setup() {
  createCanvas(800,400);
  var child=createSprite(150, 300, 50, 50);
  child.addImage(childImg);
  child.scale=0.05
}

function draw() {
  background(backgroundImg);  
  drawSprites();
  spawnSnowflakes();
  spawnSnowflakes2();
}

function spawnSnowflakes(){
  if(frameCount % 60 === 0){
     snowflake=createSprite(400, 50, 10, 10);
     snowflake.scale=0.09;
     snowflake.x=Math.round(random(10, 790));
     snowflake.addImage(snowflakeImg);
     snowflake.velocityY=3;
     snowflake.lifetime=250;
  }
}

function spawnSnowflakes2(){
  if(frameCount % 60 === 0){
     snowflake2=createSprite(400, 50, 10, 10);
     snowflake2.scale=0.06;
     snowflake2.x=Math.round(random(10, 790));
     snowflake2.addImage(snowflakeImg2);
     snowflake2.velocityY=3;
     snowflake2.lifetime=250;
  }
}