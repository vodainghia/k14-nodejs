const Animal = require('./Animal');

class Tiger extends Animal {

    static maxSpeed = 100;

    constructor() {
        super(Tiger.maxSpeed);
    }

}

module.exports = Tiger;
