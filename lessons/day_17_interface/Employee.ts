export default interface Employee {

    name: string;
    salary: number;
    supportSalary: number;

    getSalary(): number;

    getSupportSalary(): number;

}
