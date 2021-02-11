class Pin{
    constructor(x,y){
        var options ={
        isStatic : true
        
       }

        this.body = Matter.Bodies.rectangle(x,y,50,50,options);

        this.width = 50;
        this.height = 50;
        //this.radius = 50;
        this.liveFLG = 0;
        Matter.World.add(world, this.body);
        this.image = loadImage("Images/Pin.png");
        this.imageC = loadImage("Images/Pin copy.png");
      }

      scoreCount(){
      if(this.liveFLG === 1){
         score++
         
      }
      }

      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        


         


         if(this.body.speed<2){
          image(this.image,pos.x, pos.y, this.width,this.height);
         }
         else{
          image(this.imageC,pos.x, pos.y, this.width,this.height);
          World.remove(world,this.body);
          this.liveFLG++
         }
      }
      
  

  





    };