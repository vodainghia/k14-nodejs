class Animal {

    constructor(maxSpeed) {
        this.speed = Math.min(maxSpeed, this._speed());
    }

    getSpeed() {
        return this.speed;
    }

    getWinnerMessage() {
        return `Winner is ${this.constructor.name}, with speed ${this.getSpeed()} km/h.`;
    }

    _speed() {
        return Math.floor(Math.random() * 100) + 1;
    }

}

module.exports = Animal;
