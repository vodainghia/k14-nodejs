// trừu tượng, chưa có object tồn tại ở đây
const Employee = require('./Employee');
const SalaryController = require('./SalaryController');

// cụ thể hoá
// data
const teo = new Employee(50000);
const ti = new Employee(40000);

// controller
const salaryController = new SalaryController();
const totalSalary = salaryController.getTotalSalary([teo, ti]);
console.log(totalSalary);
