
class slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 5
        }
         this.body = Constraint.create(options)
         this.pointB = pointB;
         this.bodyA = bodyA;

         World.add(world,this.body)
    }
    attach(bodyA){
        this.body.bodyA = bodyA
    }
    fly(){
        this.body.bodyA = null;
    }
    display(){
        if(this.body.bodyA){
     line ( this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this .pointB.y)  
        }
    }
}
