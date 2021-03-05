const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,480,50,50);// the higher the y position, the lower the box 
    box2 = new Box(770,480,50,50);// you don't have to intialize as global
    box3 = new Box(600,400,50,50);
    box4 = new Box(770,400,50,50);
    box5 = new Box(685,330,50,50);


    pig1 = new Pig(680,480,15);
    pig2 = new Pig(680,400,15);

    log1 = new Log(685,440,220,20,PI);
    log2 = new Log(685,360,220,20,PI);
    log3 = new Log(655,300,130,20,-PI/7);
    log4 = new Log(710,250,130,20,PI/7);


    ground = new Ground(500,height,1000,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(log1.body.position.x); 
    console.log(log1.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display(); 

    ground.display();
}