class Robot {

    // Shared value and belongs to class, NOT object
    static id = 0;

    constructor() {
        this.name = 'Rô-bốt';
        Robot.id++;
    }

    getId() {
        return Robot.id;
    }

    static doSthing() {
        console.log(`Hello, my name is ${this.name}`);
    }

}

module.exports = Robot;

const robot1 = new Robot();
const robot2 = new Robot();

// be careful!!!
console.log(robot1.getId()); // 2
console.log(robot2.getId()); // 2

Robot.doSthing();
