class Shot{

    constructor(bodyA,pointB){

        var options = {
            bodyA :bodyA,
            pointB : pointB,
            stiffness : 0.01,
            length : 2

        } 
        this.pointB = pointB;
        this.shot = Constraint.create(options);
        World.add(world,this.shot);

    }
    
    fly(){

        this.shot.bodyA = null;
    }

    display(){
      if( this.shot.bodyA ) {
        var pos = this.shot.bodyA.position;
        var pointB = this.pointB;
        line(pos.x,pos.y,pointB.x,pointB.y); 
      }
    }
}