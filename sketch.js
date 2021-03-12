const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 var engine,world;

function preload() {
bg_Img = loadImage("bg.png")
hero_Img = loadImage("Superhero-02.png")
}

function setup() {
  createCanvas(1100,600);
 engine =Engine.create();
 world = engine.world;
 ground  =new Ground(500,500,1100,20)
 block1 = new Blocks(600,320,60,60)
 block2= new Blocks(600,320+50,60,60)
 block3 = new Blocks(600,320+100,60,60)
 block4 = new Blocks(600,320+150,60,60)
 block5 = new Blocks(600,320+200,60,60)
 block6 = new Blocks(600+100,280,60,60)
 block7 = new Blocks(600+100,280,60,60)
   block8 = new Blocks(600+100,280,60,60)
   block9= new Blocks(600+100,280,60,60)
   block10 = new Blocks(600+100,280,60,60)
   monster = new Monster(950,480)
   rynx = Bodies.circle(200,200,40)
   World.add(world,rynx)

     slinj = new slingshot(this.rynx,{x:250,y:160})
   
  }


function draw() {
  background("cyan");
  Engine.update(engine)
  fill("chocolate")
  stroke("brown")
  ground.display(); 
 

  fill ("pink")

stroke("blue")
strokeWeight(3)

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  slinj.display();
  monster.display();
  imageMode(CENTER)
   image(hero_Img,rynx.position.x,rynx.position.y,100,100)
}
function mouseDragged(){
  Matter.Body.setPosition(this.rynx,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slinj.fly();
}
function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(this.rynx,{x:100,y:200});
    slinj.attach(this.rynx);
  }
}