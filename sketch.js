const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var plinkoObj = [ ]
var particlesObj = [ ]
var divisionObj = [ ]
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground();
  for (var i=40; i <=width; i=i+50){
    plinkoObj.push(new Plinko(i,75))
  }
  for (var i=15; i <=width-10; i=i+50){
    plinkoObj.push(new Plinko(i,175))
  } 
  for (var i=40; i <=width; i=i+50){
    plinkoObj.push(new Plinko(i,275))
  } 
  for (var i=15; i <=width-10; i=i+50){
    plinkoObj.push(new Plinko(i,375))
  } 
  for (var j=0; j <=width; j=j+80){
    divisionObj.push(new Division(j,height-divisionHeight/2,10,divisionHeight))
  } 
  Engine.run(engine);
}

function draw() {
  background(0); 
  rectMode(CENTER)
  if(frameCount%60===0){
    particlesObj.push(new Particles(random(width/2-10,width/2+10),10,10));
  }
  for (var i=0; i <plinkoObj.length; i++){
    plinkoObj[i].display();
  }
  for (var j=0; j<divisionObj.length; j++){
    divisionObj[j].display();
  }
  for (var k=0; k <particlesObj.length; k++){
    particlesObj[k].display();
  } 
  ground.display()
  drawSprites();
}