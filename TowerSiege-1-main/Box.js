class Box {
  constructor(x, y, width, height){
    this.body4=Bodies.rectangle(x,y,width,height)
    this.width=width
    this.height=height
    World.add(world,this.body4)
  }
  display(){
    fill(0,255,255);
    var angle = this.body4.angle;
    push();
    translate(this.body4.position.x, this.body4.position.y);
    rotate(angle)
    rectMode(CENTER)
    rect(this.body4.position.x,this.body4.position.y,this.width,this.height)
   
    pop();
  }

};
