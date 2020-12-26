const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world,object

function setup() 
{
  createCanvas(800,400);
 engine=Engine.create();
 world=engine.world;
 var option={isStatic: true}
 var op={restitution:1}
 ground=Bodies.rectangle(200,390,400,10,option);
 World.add(world,ground);
 ball=Bodies.circle(200,100,30,op);
 World.add(world,ball); 
}

function draw() 
{
  background(255,255,255);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,40);
  drawSprites();
}