import Employee from "./Employee";
import SomethingElse from "./SomethingElse";

export default class ContractEmployee implements Employee, SomethingElse {

    name: string;
    salary: number;
    supportSalary: number;

    constructor(name: string) {
        this.name = name;
        this.salary = 40000;
        this.supportSalary = 0;
    }

    getSupportSalary(): number {
        return this.supportSalary;
    }

    getSalary(): number {
        return this.salary;
    }

    sayHello(): void {
        console.log("Hello!");
    }

}
