class Log{
    constructor(x,y,width,angle){
        var options={
            restitution:0.8,
            friction:1,
            density:0.3,

          }
         this.Box=Bodies.rectangle(x,y,width,20,options)
         this.width=width;
         this.height=20;
         Matter.Body.setAngle(this.Box,angle)
          World.add(world,this.Box)
    }

    display(){
        var pos=this.Box.position;
        var angle= this.Box.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
        fill("brown")
        rect(0,0,this.width,this.height); 
        pop();  
    }
}