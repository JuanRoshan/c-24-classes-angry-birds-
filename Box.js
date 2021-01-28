class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friction:1,
            density:0.3,

          }
         this.Box=Bodies.rectangle(x,y,width,height,options)
         this.width=width;
         this.height=height;
          World.add(world,this.Box)
    }

    display(){
        var pos=this.Box.position;
        var angle= this.Box.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
        fill("white")
        rect(0,0,this.width,this.height); 
        pop();  
    }
}