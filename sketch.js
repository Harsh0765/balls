const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject;
var world;
var ball;

function preload() {}

function setup() {
  createCanvas(1600, 700);

  rectMode(CENTER);
  var ball1 = new Ball(200, 300, 10, 20);

  engine = Engine.create();
  world = engine.world;

  groundObject = new ground(width / 2, 670, width, 20);
  dustbinObj = new dustbin(1200, 650);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(230);

  groundObject.display();
  dustbinObj.display();
}
