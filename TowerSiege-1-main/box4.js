class Box4 {
    constructor(x, y, width, height){
      this.body=Bodies.rectangle(x,y,width,height)
      this.width=width
      this.height=height
      World.add(world,this.body)
    }
    display(){
      var pos =this.body.position;
      
      
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle)
      
      rectMode(CENTER)
      rect(this.body.position.x,this.body.position.y,this.width,this.height)
      fill(51,240,79);
      pop();
    }
  
  }