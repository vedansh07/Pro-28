
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImage=loadImage=("Image/boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy=createSprite(100,50,50,50);
	boy.addImage(boyImage);

	//Create the Bodies Here.
	groundObject=new ground(width/2,670,width,20);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObject.display();

  
  drawSprites();
 
}

function detectCollision(){
	


}










