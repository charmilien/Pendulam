class Rope
{
    constructor(body1,point)
  {
    var options=
    {
        bodyA:body1,
        pointB:point
    }
    this.rope= Constraint.create(options);
    World.add(world,this.rope);
  }

  display()
  {
    push()
      fill(255)
      var posA= this.rope.bodyA.position;
      strokeWeight(4)
      line(posA.x,posA.y,this.rope.pointB.x,this.rope.pointB.y)  
      pop()
  }
}

