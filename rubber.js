class Rubber{
    constructor(x,y,r){
        var opyions = {
            'density':1,
            'friction':5,
            'restitution':0.3
          };
    
         this.body = bodies.circle(this.x,this.y,this.r);
         this.y=y;
         this.x=x;
         this.r=r;
         World.add(world,this.body);
        };
        display(){
          var rubberpos = this.body.position;
          Push();
          Translate(rubberpos.x, rubberpos.y);
          strokeWeight(4);
          stroke('black')
          Fill('darkblue')
          rectMode(CENTRE)
          ellipse(0,0,this.r,thid.r);
          Pop()
        };
     };