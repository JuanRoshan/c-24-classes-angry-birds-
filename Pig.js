class Pig{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:1,
            density:0.3,

          }
         this.Box=Bodies.rectangle(x,y,50,50,options)
         this.width=50;
         this.height=50;
          World.add(world,this.Box)
    }

    display(){
        var pos=this.Box.position;
        var angle= this.Box.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
        fill("lightgreen")
        rect(0,0,this.width,this.height); 
        pop();  
    }
}