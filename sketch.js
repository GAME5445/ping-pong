var Engine = Matter.Engine,
    Render = Matter.Render,
    Bodies = Matter.Bodies,
    World = Matter.World;

var engine,world

var ball,player


function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  // world = Engine.World;

   ball = new Ball(400,200,10);
   player = new Player();
   

}


function draw(){
background(0);
Engine.run(engine);


ball.display();
player.display();

}