class Monster
{

    constructor(x,y)
    {   
        var options = {
            'density' : 0.6,
            'restitution' : 0.8
           
        }
        this.x = x;
        this.y = y;
        this.radius = 70;
        this.image = loadImage("Monster-01.png");
        this.body = Bodies.circle(x,y,70,options);
        World.add(world,this.body);








    }

    display()
    {   
        var position = this.body.position;

        push();
        translate(position.x,position.y);
        rotate(this.body.angle);

        imageMode(CENTER)
        image(this.image,0,0,210,210);
        pop();



    }














}