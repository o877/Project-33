const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;

var world, engine;
var bg_img;
var snowflake;
var snowflake2;

var snowflakes=[];
var snowflakes2=[];
  
function preload(){
  bg_img = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(920,650);
   engine = Engine.create();
   world = engine.world;
   
   snowflake = new Snowflake(300, 100);
   snowflake2 = new Snowflake2(300, 100);
}

function draw() {
  background(bg_img); 
  
  Engine.update(engine);

    if (frameCount%30 === 0) {
      snowflakes.push(new Snowflake(random((1,920)), random((1,0))));
    }
    
    for (var i = 0; i < snowflakes.length; i++) {
      snowflakes[i].display();
    } 


    if (frameCount%60 === 0){
      snowflakes2.push(new Snowflake2(random(1,920), random(1,0)));
    }

    for (var j = 0; j< snowflakes2.length; j++){
      snowflakes2[j].display();
    }

  drawSprites();
}

