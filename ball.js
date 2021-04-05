class Ball{

    constructor(){
        
        this.x=400
        this.y=200
        this.r=15
        this.body = Bodies.circle(this.x,this.y,this.r);
        
        this.xspeed = 10 || -10;
        this.yspeed = 9.5;
    }

    display(){


        push();

        ellipseMode(CENTER);
        fill(225);
        ellipse(this.x,this.y,this.r); 

        this.x += this.xspeed;
        this.y += this.yspeed;

        // if(this.x > width -this.r || this.x < this.r ){
        //     this.xspeed = -this.xspeed;
        // }
        if(this.y > height -this.r || this.y < this.r ){
            this.yspeed = -this.yspeed;
        }


        pop();
    }

}