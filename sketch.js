
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(200,250,50,PI/2);
	bobObject2 = new Bob(300,250,50,PI/2);
	bobObject3 = new Bob(400,250,50,PI/2);
	bobObject4 = new Bob(500,250,50,PI/2);
	bobObject5 = new Bob(600,250,50,PI/2);
    roof = new Roof(400,150,600,20);
	rope1 = new Rope(bobObject1.body,roof.body, -bobDiameter*2, 0)
	rope2 = new Rope(bobObject2.body,roof.body, -bobDiameter*2, 0)
	rope3 = new Rope(bobObject3.body,roof.body, -bobDiameter*2, 0)
	rope4 = new Rope(bobObject4.body,roof.body, -bobDiameter*2, 0)
	rope5 = new Rope(bobObject5.body,roof.body, -bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



