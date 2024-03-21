export default abstract class BankingAccount {

    protected balance: number;
    protected minimumBalance: number;

    constructor(balance: number, minimumBalance: number) {
        this.balance = balance;
        this.minimumBalance = minimumBalance;
    }

    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
    abstract getBalance(): number;

}
