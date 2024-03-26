import Employee from "./Employee";

export function calcTotalSalary(employeeList: Employee[]): number {
    return employeeList.reduce((sum, employee) => sum += employee.getSalary() + employee.getSupportSalary(), 0);
}

// Function Type Expressions: https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions
type TwoNumberWithReturnNumber = (a: number, b: number) => number;

function _findEmployeesWithEdgeSalary(employeeList: Employee[], comparator: TwoNumberWithReturnNumber): Employee[] {
    if (employeeList.length === 0) {
        return [];
    }

    const edgeSalary = employeeList.reduce((edge, employee) => comparator(edge, employee.getSalary()), employeeList[0].getSalary());

    return employeeList.filter(employee => employee.getSalary() === edgeSalary);
}

export function getListHighestSalary(employeeList: Employee[]): Employee[] {
    return _findEmployeesWithEdgeSalary(employeeList, Math.max);
}

export function getListLowestSalary(employeeList: Employee[]): Employee[] {
    return _findEmployeesWithEdgeSalary(employeeList, Math.min);
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
    return emp1.getName() > emp2.getName() ? 1 : emp1.getName() === emp2.getName() ? 0 : -1;
};
