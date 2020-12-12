class Box2 {
    constructor(x, y, width, height){
      this.body2=Bodies.rectangle(x,y,width,height)
      this.width=width
      this.height=height
      World.add(world,this.body2)
    }
    display(){
      var pos =this.body2.position;
      
      fill(144,108,207);
      var angle = this.body2.angle;
      push();
      translate(this.body2.position.x, this.body2.position.y);
      rotate(angle)
      rectMode(CENTER)
      rect(this.body2.position.x,this.body2.position.y,this.width,this.height)
     
      pop();
    }
  
  }