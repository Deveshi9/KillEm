class Blocks {
    constructor(x,y,width,height) {
      var options = {
          restitution : 0.8,
          friction : 0.6
  
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    
     
      rect(pos.x, pos.y, this.width, this.height);
    }
  };