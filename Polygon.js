class Polygon  {
  constructor(x,y,w,h){
    var options={
      'isStatic':true
    }
    polygon=this.bodies.circle(x,y,w,h,options);
    this.x=x;
    this.y=y;
    World.add(world,polygon);
  }
  display(){
    var pos=this.body.position;

  }

  
}
