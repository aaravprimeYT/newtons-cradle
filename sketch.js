
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1;


function preload()
{
	
}

function setup() {
	createCanvas(1000,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(300,550,50);
	ball2 = new Ball(400,550,50);
	ball3 = new Ball(500,550,50);
	ball4 = new Ball(600,550,50);
	ball5 = new Ball(700,550,50);
	
	groundSprite=createSprite(width/2, 100, 600,10);
	groundSprite.shapeColor=color(255,255,0);
	
	ground = Bodies.rectangle(width/2, 100, 600, 10 , {isStatic:true});
	World.add(world, ground);
	ground.debug = true;


	rope1 = new Rope(ball1.body,ground,-200,0);
	rope2 = new Rope(ball2.body,ground,-100,0);
	rope3 = new Rope(ball3.body,ground,0,0);
	rope4 = new Rope(ball4.body,ground,100,0);
	rope5 = new Rope(ball5.body,ground,200,0);



	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(123,252,123);
	

  ball1.display();
  Matter.Body.setStatic(ball2.body,true);
  ball2.display();
  Matter.Body.setStatic(ball3.body,true);
  ball3.display();
  Matter.Body.setStatic(ball4.body,true);
  ball4.display();
  Matter.Body.setStatic(ball5.body,false);
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-7.5,y:-7.5});
  }
  if (keyCode === DOWN_ARROW) {
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:15,y:15});

  }
  if (keyCode === RIGHT_ARROW) {
    Matter.Body.applyForce(ball5.body,ball5.body.position,{x:7.5,y:-7.5});
  }

  if (keyCode === LEFT_ARROW) {
    Matter.Body.applyForce(ball5.body,ball5.body.position,{x:-15,y:15})
  }
 
  text(mouseX + ":" + mouseY,700,50);
  
  drawSprites();
 
}


