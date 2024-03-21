import SavingsAccount from "./SavingsAccount";
import CheckingAccount from './CheckingAccount';

const checkingAccount = new CheckingAccount(5000);
const savingsAccount = new SavingsAccount(300);

checkingAccount.deposit(200);
console.log(checkingAccount.getBalance());
checkingAccount.withdraw(5150);
console.log(checkingAccount.getBalance());

savingsAccount.deposit(100);
console.log(savingsAccount.getBalance());
savingsAccount.withdraw(400);
console.log(savingsAccount.getBalance());
