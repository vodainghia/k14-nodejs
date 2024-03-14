import Employee from "./Employee";

export default class FulltimeEmployee extends Employee {
    static _salary: number = 50000;

    constructor(name: string) {
        super(name, FulltimeEmployee._salary);
    }

}
