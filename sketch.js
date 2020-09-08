const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box,box1,box2,box3,box4;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

    box = new Box(400,200);
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)

  box.display();

  drawSprites();
}