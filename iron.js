class Iron{
    constructor(x,y){
        var opyions = {
            'density':30,
            'friction':3,
            'restitution':0.8
          };
    
         this.body = bodies.rectangle(x, y, 50, 50, options);
         this.width = 80;
         this.height = 50;
         
         World.add(world,this.body);
        };
        display(){
          var pos = this.body.position;
          var angle = this.body.angle;
          Push();
          Translate(pos.x,pos.y);
          rotate(angle);
          Fill('brown')
          rectMode(CENTRE)
          RECT(0,0,this.width,thid.height);
          Pop()
        };
     };