import Employee from "./Employee";

export function calcTotalSalary(employeeList: Employee[]): number {
    return employeeList.reduce((sum, employee) => sum += employee.salary, 0);
}

export function getListHighestSalary(employeeList: Employee[]): Employee[] {
    const maxSalary = employeeList.reduce((max, employee) => Math.max(max, employee.salary), employeeList[0].salary);

    return employeeList.filter(employee => employee.salary === maxSalary);
}

export function getListLowestSalary(employeeList: Employee[]): Employee[] {
    const minSalary = employeeList.reduce((min, employee) => Math.min(min, employee.salary), employeeList[0].salary);

    return employeeList.filter(employee => employee.salary === minSalary);
}

export function ascendingSortEmployeeByName(employeeList: Employee[]): Employee[] {
    return employeeList.sort((emp1, emp2) => {
        if (emp1.name > emp2.name) {
            return 1;
        } else if (emp1.name === emp2.name) {
            return 0;
        } else {
            return -1;
        }
    });
}

export function descendingSortEmployeeByName(employeeList: Employee[]): Employee[] {
    return ascendingSortEmployeeByName(employeeList).reverse();
}

export function ascendingSortEmployeeBySalary(employeeList: Employee[]): Employee[] {
    return employeeList.sort((emp1, emp2) => (emp1.salary - emp2.salary));
}

export function descendingSortEmployeeBySalary(employeeList: Employee[]): Employee[] {
    return ascendingSortEmployeeBySalary(employeeList).reverse();
}

export function printEmployeeList(employeeList: Employee[]): void {
    employeeList.forEach(emp => console.log(`The employee with name is ${emp.name} and has salary is ${emp.salary}.`));
}
