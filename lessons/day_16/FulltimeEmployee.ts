import Employee from "./Employee";

export default class FulltimeEmployee extends Employee {

    constructor(name: string) {
        super(name);
        this.salary = 50000;
    }

    getSupportSalary(): number {
        return 5000;
    }

    getSalary(): number {
        return this.salary;
    }

}
