
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject,dustbinIMG,paperIMG
var world;

function preload()
{
	
	dustbinIMG=loadImage("dustbin.png")
	paperIMG=loadImage("paper.png")

}

function setup() {
	
	createCanvas(1600, 700);

	dustbinObj=createSprite(1200,650,5,5)
	dustbinObj.addImage(dustbinIMG)
	dustbinObj.scale=0.3

	paperObject=createSprite(200,450,5,5)
	paperObject.addImage(paperIMG)
	paperObject.scale=0.3


	rectMode(CENTER);
   

	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
 
  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





