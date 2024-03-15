export default class Employee {

    private name: string;
    private salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    getSalary(): number {
        return this.salary;
    }

    setSalary(salary: number) {
        this.salary = salary;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

}
