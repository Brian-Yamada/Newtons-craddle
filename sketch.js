
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Body;
const Constraint = Matter.body;

var ball1, ball2, ball3, ball4;
var roof1, string1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball1 = new ball(400,600);

	ball2 = new ball(400,600);

	ball3 = new ball(400,600);

	ball4 = new ball(400,600);

	roof1 = new roof(400,200,500,50);

	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  roof1.display();
  string1.display();
  



  drawSprites();
 
}



