class Log{
    constructor(x,y,width,height,angle){
        var options = {
            'restitution':0.3,
            'friction' : 2.0,
            'density': 2.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);// set angle is a function of Matter Body Object
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
    }
}