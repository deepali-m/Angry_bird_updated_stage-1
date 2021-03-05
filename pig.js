class Pig{
    constructor(x,y){
        var options ={
            'restitution': 0.5,
            'friction' : 0.3,
            'density' : 1.0
        }
        this.body = Bodies.circle(x,y,20,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);// circle center=radisu
        rotate(angle);
        fill("green");
        ellipse(0,0,15)
        pop();
    }
}