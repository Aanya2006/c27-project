
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, ground);
	pendulum=Bodies.circle(300,200,20,{"restitution":0.8,"friction":1});
	World.add(world,pendulum);
	block=Bodies.rectangle(300,100,160,30,{isStatic:true});
	World.add(world,block);
var options={
	bodyA:block,
	bodyB:pendulum,
	length:100,
	stiffness:0.04

}

string=Constraint.create(options);
World.add(world,string)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  fill("brown")
  rect(block.position.x,block.position.y,160,30);
  rect(ground.position.x,ground.position.y,width,10);
  fill("blue")
  ellipse(pendulum.position.x,pendulum.position.y,60,60);
  stroke("white")
  strokeWeight(4)
  line(block.position.x,block.position.y,pendulum.position.x,pendulum.position.y)
  if(keyDown("ENTER")){
	  pendulum.position.x=300
	  pendulum.position.y=200
	  console.log("hi")
  }
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(pendulum,{x:mouseX,y:mouseY})
}



