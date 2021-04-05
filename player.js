class Player{

    constructor(){
        this.x = 770;
        this.y = 200;

        this.body = Bodies.rectangle(this.x,this.y,15,70);
        Matter.World.add(world, this.body);
    }

    display(){

        push();

        rectMode(CENTER);
        fill(225)
        rect(this.x,mouseY,15,75);

        pop();
    }
}