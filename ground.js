class Ground {
  constructor(x,y,width,height){
      var options = {
          isStatic:true
      }
      this.body = bodies.rectangle(x,y,width,height,options);
      this.width = 50;
      this.height = 50;
      World.add(world,this.body);
  }
      display(){
          var pos = this.body.position;
          rectMode(CENTRE);
          Fill("brown");
          rect(pos.x,pos.y,this.width,thi.height);
      }
};