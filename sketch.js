const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var platform;
var bird, slingShot;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(900,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(450,470,900,20);
    platform = new Ground(360,350,200,15);

    

    //bird = new Bird(195,48);

    //log6 = new Log(230,180,80, PI/2);
    //slingshot = new SlingShot(bird.body,{x:195, y:48});
}

function draw(){
    background ("grey")
    
    Engine.update(engine);
    strokeWeight(4);
   
    ground.display();
    
    

    //bird.display();
    platform.display();
    //log6.display();
   // slingshot.display();
    text(mouseX+","+mouseY,10,10);    
}

/*function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}*/