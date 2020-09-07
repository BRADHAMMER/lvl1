const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plateform , plant; 

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);

	plateform = new Ground(width/2,690,width,50); 
    plant = new Tree(1000, 600 ,100 ,100); 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  plateform.display();
  plant.display();
  drawSprites();
 
}



