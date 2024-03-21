import BankingAccount from "./BankingAccount";

export default class SavingsAccount extends BankingAccount {

    constructor(initAmount: number) {
        super(initAmount, 0);
    }

    getBalance(): number {
        return this.balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (this.balance - amount >= this.minimumBalance) {
            this.balance -= amount;
        } else {
            throw new Error(`The minimum balance must be ${this.minimumBalance}$`);
        }
    }

}
