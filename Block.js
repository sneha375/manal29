class Block {
  constructor(x, y, width, height){
    var options={
        restitution:0.4,
        friction:1.0,
    }
    this.body=this.bodies.rectangle(x,y,w,h,options);
    this.w=w;
    this.h=h;
    World.add(world,this.body); 
  }
  display(){
  var angle =this.body.angle;
  var pos=this.body.position;
  rectMode(CENTER);
  rectangle(pos.x,pos.y,this.w,this.h);
  
  }

};
