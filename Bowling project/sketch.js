const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

const Render = Matter.Render;




var path;
var engine, world;
var backimg;
var Pin1;
var fourPinRow = [];
var slingShot;
var ball, body;
var render;
var block;
var score = 0;
function preload(){
  backimg = loadImage("Images/Backgroung2.jpg");
  
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;
  engine.world.gravity.y = 0;
  database = firebase.database();
  //render = Render.create({ element: document.body, engine: engine, options: { width: displayWidth, height:displayHeight, wireframes: false } });
  ball =  new Ball (displayWidth/2, displayHeight - 100, 80,80)

  slingShot = new SlingShot (ball.body, { x:displayWidth/2, y:displayHeight - 100 } );
  
  Pin1 = new Pin(displayWidth/2 - 5 ,displayHeight/2+75 - 70);
  

  // four pin loop 

  for(var i = 0; i < 160; i=i+40){
      var tmppin =  new Pin(displayWidth/2 - 70 + i,displayHeight/2 - 70); 
      fourPinRow.push(tmppin);
      
  }

    // three pin loop

  for(var i = 0; i < 120; i=i+40){
    var tmppin2 =  new Pin(displayWidth/2 +25 - 70 + i,displayHeight/2 + 25 - 70) ; 
    fourPinRow.push(tmppin2);
    
}

// two pin loop

for(var i = 0; i< 80; i = i+40){
  var tmppin3 = new Pin(displayWidth/2 + 50 - 70 + i,displayHeight/2 + 50 - 70) ; 
  fourPinRow.push(tmppin3);
}


}


function draw() {
  background(backimg);
  Engine.update(engine);
  //Render.run(render);
  Pin1.display();
  Pin1.scoreCount();
 
  
  for(var i = 0; i<fourPinRow.length;i++){
    fourPinRow[i].display();
    fourPinRow[i].scoreCount();
  }


   
  ball.display();
    slingShot.display();
  
    text("Score" + score, width-300, 50);

 detectCollision(ball,Pin1);
for (var i = 0; i<fourPinRow.length;i++){
  detectCollision(ball,fourPinRow[i]);
 }



}     

function mouseDragged(){
  
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
      
  
}



function mouseReleased(){
  
  slingShot.fly();
  //Matter.Body.setStatic(ball.body,false);
  Matter.Body.applyForce(ball.body,{x:0, y: - 50});
  //whoosh.play();
}

function detectCollision(ball,pin){
  pinBodyPosition=pin.body.position
  ballBodyPosition=ball.body.position
  
  var distance=dist(ballBodyPosition.x, ballBodyPosition.y, pinBodyPosition.x, pinBodyPosition.y)
 
  	if(distance<=pin.width+ball.radius)
    {
   
  	  Matter.Body.setStatic(pin.body,false);
    }

  }




