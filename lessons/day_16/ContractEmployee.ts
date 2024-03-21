import Employee from "./Employee";

export default class ContractEmployee extends Employee {

    constructor(name: string) {
        super(name);
        this.salary = 40000;
    }

    getSupportSalary(): number {
        return 4000;
    }

    getSalary(): number {
        return this.salary;
    }

}
