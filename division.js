class Division {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      
      var pos1=this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos1.x, pos1.y, this.width, this.height);
    }
  };
