// User-defined data
class Person {

    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // getter
    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    // setter
    set name(name) {
        this._name = name;
    }

    set age(age) {
        this._age = age;
    }
}

module.exports = Person;