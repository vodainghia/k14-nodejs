## Bank accounts:
* Saving: can deposit and get balance and withdraw maximum amount
* Checking: same as saving account but can't with draw all money, should be left 50

## Requirement
1. Define an abstract class BankingAccount with the following abstract methods:

* deposit(amount: number): void: Adds the given amount to the account balance.
* withdraw(amount: number): void: Subtracts the given amount from the account balance.
* getBalance(): number: Returns the current balance of the account.
2. Create concrete subclasses of Account for different types of bank accounts:

* SavingsAccount: Represents a savings account. It should have a minimumBalance property.
* CheckingAccount: Represents a checking account. It should have a overdraftLimit property.
3. Implement the abstract methods in each subclass to handle deposit, withdrawal, and balance retrieval according to the rules of each account type.

4. Create instances of each account type and test their methods by performing deposits, withdrawals, and checking balances.
