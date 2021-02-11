class Ball {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
           'gravity': 0 
        
      }
      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius =radius;
      
      this.image = loadImage("Images/Ball.png");

      World.add(world,this.body);
    }
    display(){
        
        var pos =this.body.position;
        image(this.image,pos.x, pos.y, this.radius, this.radius);
      }
}