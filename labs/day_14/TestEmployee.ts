import ContractEmployee from './ContractEmployee';
import FulltimeEmployee from './FulltimeEmployee';
import {
    calcTotalSalary,
    getListHighestSalary,
    getListLowestSalary,
    printEmployeeList,
    ascendingSortEmployeeBySalary,
    descendingSortEmployeeBySalary,
    ascendingSortEmployeeByName,
    descendingSortEmployeeByName
} from './SalaryController';

const emp1 = new FulltimeEmployee('AA');
const emp2 = new FulltimeEmployee('BB');
const emp3 = new FulltimeEmployee('CC');
const emp4 = new ContractEmployee('DD');
const emp5 = new ContractEmployee('EE');
//const employeeList = [emp3, emp1, emp5, emp2, emp4];
const employeeList = [];

const totalSalary = calcTotalSalary(employeeList);
console.log('\tTotal salary of all employees is: ', totalSalary);

console.log('\n\tList of highest salary:');
const highestSalaryList = getListHighestSalary(employeeList);
printEmployeeList(highestSalaryList);

console.log('\n\tList of lowest salary:');
const lowestSalaryList = getListLowestSalary(employeeList);
printEmployeeList(lowestSalaryList);

console.log('\n\tList of ascending order by name:');
const ascendingNameList = ascendingSortEmployeeByName(employeeList);
printEmployeeList(ascendingNameList);

console.log('\n\tList of descending order by name:');
const descendingNameList = descendingSortEmployeeByName(employeeList);
printEmployeeList(descendingNameList);

console.log('\n\tList of ascending order by salary:');
const ascendingSalaryList = ascendingSortEmployeeBySalary(employeeList);
printEmployeeList(ascendingSalaryList);

console.log('\n\tList of descending order by salary:');
const descendingSalaryList = descendingSortEmployeeBySalary(employeeList);
printEmployeeList(descendingSalaryList);
