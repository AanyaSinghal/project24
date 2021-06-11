class Hammer{
    constructor(x,y){
        var opyions = {
            'density':2,
            'friction':1.0,
            'restitution':0.5
          };
    
         this.body = bodies.rectangle(x, y, 50, 50, options);
         this.width = 50;
         this.height = 50;
         World.add(world,this.body);
        };
        display(){
          var pos = this.body.position;
          pos.x = mouseX;
          pos.y = mouseY;
          var angle = this.body.angle;

          Push();
          Translate(pos.x,pos.y);
          rotate(angle);
          strokeWeight(3);
          stroke('blue')
          Fill('green')
          rectMode(CENTRE)
          RECT(0,0,this.width,thid.height);
          Pop()
        };
     };