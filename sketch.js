var iss
var spacebg
var spacec1,spacecf1,spacecf2,spacecf4
var spacecraft
var hasdocked = false

function preload(){

  spacebg=loadImage("spacebg.jpg");
  spacecf1=loadImage("spacecraft1.png");
  spacecf2=loadImage("spacecraft2.png");
  spacecf3=loadImage("spacecraft3.png");
  spacecf4=loadImage("spacecraft4.png");
  isss=loadImage("iss.png");
  

}

function setup() {
  createCanvas(800,400);
  
  iss= createSprite(330,130);
  spacecraft= createSprite(285,240);
  
  iss.addImage(isss)
  spacecraft.addImage(spacecf1);
  spacecraft.scale=0.10
  iss.scale=0.60
}


function draw() {
  background(spacebg);  

  if(keyDown("up")){

    spacecraft.y=spacecraft.y-2
    spacecraft.addImage(spacecf2)

    
  }

  if(keyDown("left")){

    spacecraft.x=spacecraft.x-2
    spacecraft.addImage(spacecf4)
  }

  if(keyDown("right")){

    spacecraft.x=spacecraft.x+2
    spacecraft.addImage(spacecf3)
  }

  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){

    textSize(25)
    fill("white");

    text("docking successful",200,300);
  }
  drawSprites();
}