export default class Employee {

    private _name: string;
    private _salary: number;

    constructor(name: string, salary: number) {
        this._name = name;
        this._salary = salary;
    }

    get salary(): number {
        return this._salary;
    }

    set salary(salary: number) {
        this._salary = salary;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

}
