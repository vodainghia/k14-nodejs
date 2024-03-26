import Employee from "./Employee";

export default class FulltimeEmployee implements Employee {

    name: string;
    salary: number;
    supportSalary: number;

    constructor(name: string) {
        this.name = name;
        this.salary = 50000;
        this.supportSalary = 5000;
    }

    getSupportSalary(): number {
        return this.supportSalary;
    }

    getSalary(): number {
        return this.salary;
    }

}
