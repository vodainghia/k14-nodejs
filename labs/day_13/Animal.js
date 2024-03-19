class Animal {

    constructor(maxSpeed) {
        this.speed = this._speed(maxSpeed);
    }

    getSpeed() {
        return this.speed;
    }

    getWinnerMessage() {
        return `Winner is ${this.constructor.name}, with speed ${this.getSpeed()} km/h.`;
    }

    _speed(maxSpeed) {
        return Math.min(maxSpeed, Math.floor(Math.random() * 100) + 1);
    }

}

module.exports = Animal;
