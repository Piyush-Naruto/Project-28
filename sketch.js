
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree;
function preload()
{
	treeImg = loadImage("tree.png");	
	boyImg = loadImage("boy.png");
	stoneImg = loadImage("stone.png");
	mangoImg = loadImage("mango.png");
}

function setup() {
	var canvas = createCanvas(1200,400);
	var option1 = {
		isStatic:false,
		restitution:0.8,
		friction:1.0,
		density:1.2
	}

	var option2 = {
		isStatic:true,
		restitution:0,
		friction:1,
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	tree = createSprite(1000,250,20,20);
	tree.addImage(treeImg);
	tree.scale=0.3

	boy = createSprite(200,330,20,20);
	boy.addImage(boyImg);
	boy.scale=0.10;

	stone = createSprite(150,290,20,20,option1);
	stone.addImage(stoneImg);
	stone.scale=0.10;
	stone.x = mouseX;
	stone.y = mouseY;
	
	mango1 = createSprite(1000,250,20,20,option2);
	mango1.addImage(mangoImg);
	mango1.scale=0.1

	mango2 = createSprite(900,250,20,20,option2);
	mango2.addImage(mangoImg);
	mango2.scale=0.1

	mango3 = createSprite(900,240,20,20,option2);
	mango3.addImage(mangoImg);
	mango3.scale=0.1

	mango4 = createSprite(1100,240,20,20,option2);
	mango4.addImage(mangoImg);
	mango4.scale=0.1

	mango5 = createSprite(960,150,20,20,option2);
	mango5.addImage(mangoImg);
	mango5.scale=0.1

	mango6 = createSprite(1100,150,20,20,option2);
	mango6.addImage(mangoImg);
	mango6.scale=0.1

	slingshot = new Slingshot(stone,{x:200, y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();	
  //slingshot.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  drawSprites();
}
function mouseDragged()
{
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased()
{
    slingshot.fly();
}

function detectcollision(lstone,lmango){
	mango.Body.Position=lmango.Body.Position
	stone.Body.Position=lstone.Body.Position
var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		matter.Body.setStatic(lmango.body,false)
	}
}

function keypresses(){
	if(keycode === 32){
		Matter.Body.setPosition(stone.body,{x:235,y:420});
		launcherObject.attach(stone.body);
	}
}

