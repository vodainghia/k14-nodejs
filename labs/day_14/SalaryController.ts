import Employee from "./Employee";

export function calcTotalSalary(employeeList: Employee[]): number {
    return employeeList.reduce((sum, employee) => sum += employee.getSalary(), 0);
}

export function getListHighestSalary(employeeList: Employee[]): Employee[] {
    const maxSalary = employeeList.reduce((max, employee) => Math.max(max, employee.getSalary()), employeeList[0].getSalary());

    return employeeList.filter(employee => employee.getSalary() === maxSalary);
}

export function getListLowestSalary(employeeList: Employee[]): Employee[] {
    const minSalary = employeeList.reduce((min, employee) => Math.min(min, employee.getSalary()), employeeList[0].getSalary());

    return employeeList.filter(employee => employee.getSalary() === minSalary);
}

export function ascendingSortEmployeeByName(employeeList: Employee[]): Employee[] {
    return employeeList.sort(_compareText);
}

export function descendingSortEmployeeByName(employeeList: Employee[]): Employee[] {
    return ascendingSortEmployeeByName(employeeList).reverse();
}

export function ascendingSortEmployeeBySalary(employeeList: Employee[]): Employee[] {
    return employeeList.sort((emp1, emp2) => (emp1.getSalary() - emp2.getSalary()));
}

export function descendingSortEmployeeBySalary(employeeList: Employee[]): Employee[] {
    return ascendingSortEmployeeBySalary(employeeList).reverse();
}

export function printEmployeeList(employeeList: Employee[]): void {
    employeeList.forEach(emp => printEmployee(emp));
}

export function printEmployee(employee: Employee): void {
    console.log(`The employee with name is ${employee.getName()} and has salary is ${employee.getSalary()}.`);
}

function _compareText(emp1: Employee, emp2: Employee) {
    if (emp1.getName() > emp2.getName()) {
        return 1;
    } else if (emp1.getName() === emp2.getName()) {
        return 0;
    } else {
        return -1;
    }
};
