const Animal = require('./Animal');

class Dog extends Animal {

    static maxSpeed = 60;

    constructor() {
        super(Dog.maxSpeed);
    }

}

module.exports = Dog;
