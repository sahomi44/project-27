const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stick1,wood,ballObject1,ballObject2,ballObject3,ballObject4,ballObject5,ballDiameter; 

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create()
    world = engine.world;


    wood = new Wood(350,100,300,30);
    

    ball2 = new Ball(300,300);
    ball3 = new Ball(350,300);
    ball4 = new Ball(400, 300);
    ball5 = new Ball(450,300);
    ball1 = new Ball(200,300)

    stick1 = new Stick(ballObject1.body,wood.body,-100,0);
    
    stick2 = new Stick(ballObject2.body,wood.body,-50,0);
    
    stick3 = new Stick(ballObject3.body,wood.body,-0,0);
   
    stick4 = new Stick(ballObject4.body,wood.body,+50,0);
    
    stick5 = new Stick(ballObject5.body,wood.body,+100,0);
   
   Engine.run(engine);
}

function draw(){
    background("white");
    Engine.update(engine);

 wood.display();

 stick1.display();
 stick2.display();
 stick3.display();
 stick4.display();
 stick5.display();


 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();

}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:-730,y:0})
  }

}