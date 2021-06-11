class Stone{
    constructor(x , y, width, height){
        var opyions = {
            'density':12,
            'friction':0.9,
            'restitution':0.8
          };
    
         this.body = bodies.rectangle(x, y, width, height, options);
         this.width = width;
         this.height = height;
         
         World.add(world,this.body);
        };
        display(){
          var pos = this.body.position;
          var angle = this.body.angle;
          Push();
          Translate(pos.x,pos.y);
          rotate(angle);
          strokeWeight(4);
          stroke('black')
          Fill('black')
          rectMode(CENTRE)
          RECT(0,8,this.width,thid.height);
          Pop()
        };
     };