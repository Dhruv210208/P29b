class Chain {
    constructor(bA, pB) {
        var options = {
            bodyA: bA,
            pointB: pB,
            stiffness: 0.8,
            length: 10



        }
        this.sling = Constraint.create(options)

        World.add(world, this.sling)


    }

    attach(body) {
        this.sling.bodyA = body;
    }

    fly() {
        this.sling.bodyA = null;
    }
    display() {
        if (this.sling.bodyA) {

        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;

            strokeWeight(7);
            line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
        }

    }

}