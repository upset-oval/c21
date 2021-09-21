
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var radius = 40
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var balloptions = {
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2,
}
ball = Bodies.circle(260,100,radius/2,balloptions)
World.add(world,ball)
	Engine.run(engine);
  groundObject = new Ground(width/2,670,width,20)
  leftSide = new Ground(1100,600,20,120)
  rightSide = new Ground(1350,600,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,radius,radius)
  groundObject.show()
 leftSide.show()
rightSide.show()
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:90,y:-85})
	}
}


