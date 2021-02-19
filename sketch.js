
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10,ball11,ball12,ball13;
var ball14,ball15,ball16,ball17,ball18,ball19,ball20,ball21,ball22,ball23,ball24,ball25,ball26,ball27,ball28,ball29,ball30,ball31,ball32,ball33;
var wall34,wall35,wall36,wall37,wall38,wall39,ball40,ball41,ball42,ball43,ball44,ball45,ball46,ball47,ball48,ball49,ball50,ball51,ball52,ball53;
var B1,B2,B3,B4,B5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1=new Ground(400,695,800,10)
wall1=new Ground(450,590,10,200)
wall2=new Ground(350,590,10,200)
wall3=new Ground(250,590,10,200)
wall4=new Ground(550,590,10,200)
wall5=new Ground(650,590,10,200)
wall6=new Ground(750,590,10,200)
wall7=new Ground(150,590,10,200)
wall8=new Ground(50,590,10,200)
ball1=new Balls(400,100)
ball2=new Balls(500,100)
ball3=new Balls(600,100)
ball4=new Balls(700,100)
ball5=new Balls(300,100)
ball6=new Balls(200,100)
ball7=new Balls(100,100)

ball16=new Balls(450,200)
ball17=new Balls(550,200)
ball18=new Balls(650,200)
ball19=new Balls(750,200)
ball20=new Balls(350,200)
ball21=new Balls(250,200)
ball22=new Balls(150,200)
ball23=new Balls(50,200)

ball32=new Balls(400,300)
ball33=new Balls(500,300)
ball34=new Balls(600,300)
ball35=new Balls(700,300)
ball36=new Balls(300,300)
ball37=new Balls(200,300)
ball38=new Balls(100,300)

ball47=new Balls(450,400)
ball48=new Balls(350,400)
ball49=new Balls(250,400)
ball50=new Balls(150,400)
ball51=new Balls(50,400)
ball52=new Balls(550,400)
ball53=new Balls(650,400)
ball54=new Balls(750,400)

Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display()
  wall1.display()
  wall2.display()
  wall3.display()
  wall4.display()
  wall5.display()
  wall6.display()
  wall7.display()
  wall8.display()
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  ball6.display()
  ball7.display()
  
  ball16.display()
  ball17.display()
  ball18.display()
  ball19.display()
  ball20.display()
  ball21.display()
  ball22.display()
 
  ball32.display()
  ball33.display()
  ball34.display()
  ball35.display()
  ball36.display()
  ball37.display()
  ball38.display()
  
  ball47.display()
  ball48.display()
  ball49.display()
  ball50.display()
  ball51.display()
  ball52.display()
  ball53.display()
  ball54.display()
  B1.display()
  B2.display()
  B3.display()
  B4.display()
  B5.display()
  drawSprites();
  text(mouseX+","+mouseY, mouseX,mouseY)
}

function mousePressed(){
  B1=new Ball()
  B2=new Ball()
  B3=new Ball()
  B4=new Ball()
  B5=new Ball()
}


