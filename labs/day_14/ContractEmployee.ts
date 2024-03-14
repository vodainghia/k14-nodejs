import Employee from "./Employee";

export default class ContractEmployee extends Employee {
    static _salary: number = 40000;

    constructor(name: string) {
        super(name, ContractEmployee._salary);
    }

}
