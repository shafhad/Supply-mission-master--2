class box
{
   constructor(x,y,w,h,angle)
   {
    this.w = w;
    this.h = h;
       this.body = Bodies.rectangle(x,y,w,h)
       
       Matter.Body.setAngle(this.body, angle);
       World.add(world,this.body);
       
   }
   display()
   {
    var angle = this.body.angle;
    push ()
       fill ("red");
      // rotate(angle);
       rectMode(CENTER);
       rect(this.body.position.x,this.body.position.y,this.w,this.h); 
       pop ()
   }
}
