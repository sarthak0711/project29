class Box{

    constructor(x,y){

        var options={
            isStatic:true,
            density:1.2,
            friction:0.5
        }
        this.body=Matter.Bodies.rectangle(x,y,100,50);
        World.add(world,this.body);

    }
    display(){

        rectMode(CENTER);
        rect(x,y,100,50)

    }

}