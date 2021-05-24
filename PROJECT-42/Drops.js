class CreateDrop {
    constructor(x,y){
        this.body=Bodies.circle(x,y,5);
        World.add(world,this.body);

        

    }
    display(){
        fill("blue")
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,5,5)
        
    }

    update(){
        if(this.body.position.y>1200){
           Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }

    }
    
}