class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 100
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;

        World.add(world, this.sling);

    }
    fly(){
        
    }
    display(){
        if(this.sling.bodyA){
        //
        }
        }
    
}
