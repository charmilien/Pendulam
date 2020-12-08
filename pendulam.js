class Bob{
    constructor(x,y)
	{
		var options={
			isStatic: false,
			restitution:1,
			friction:0,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.body=Bodies.circle(x,y, 25, options)
		World.add(world, this.body);
    }

    display()
    {
        strokeWeight(3);
        fill(255,0,255)
        ellipse(this.body.position.x,this.body.position.y,50,50); 
    }
}
