const Animal = require('./Animal');

class Horse extends Animal {

    static maxSpeed = 75;

    constructor() {
        super(Horse.maxSpeed);
    }
}

module.exports = Horse;
