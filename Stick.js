class Stick{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
          var options = {
              bodyA:body1,
              bodyB:body2,
              pointB:{x:this.offsetX,y:this.offsetY}
          }
          this.Stick = Matter.Constraint.create(options);
           World.add(world,this.Stick);
    }
    display(){
        var point1 = this.Stick.bodyA.position;
        var point2 = this.Stick.bodyB.position;

        strokeWeight(2);

        var Anchor1x = point1.x;
        var Anchor1y = point1.y;

        var Anchor2x = point2.x + this.offsetX;
        var Anchor2x = point2.x + this.offsetX;

        line(Anchor1x,Anchor1y,Anchor2x,Anchor2y);

    }
}