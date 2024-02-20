const readlineSync = require('readline-sync');
const { deepCopyObject } = require('../../lessons/utils/ObjectHelper');

const firstAccount = {
    accountNumber: '1234',
    routingNumber: '666333666',
    balance: 60000000
};

const secondAccount = deepCopyObject(firstAccount);
secondAccount.accountNumber = '5678';
const bankAccounts = [firstAccount, secondAccount];

function myBankApp() {
    printOptionMenu();

    const userOption = Number(readlineSync.question('Please select option: '));

    switch (userOption) {
        case 1:
            const account = findAccount();
            _logAccountInfo(account);
            break;
        case 2:
            withdrawMoney();
            break;
        case 0:
            console.log("Good bye!");
            break;
        default:
            console.log("Wrong option!!!");
    }
}

function findAccount() {
    const accountNumber = _getAccountNumber();
    return bankAccounts.find(function (account) {
        if (account.accountNumber === accountNumber) {
            return account;
        }
    });
}

function withdrawMoney() {
    const account = findAccount();
    _logAccountInfo(account);

    const amountToWithdraw = Number(readlineSync.question("Please input an amount: "));
    const currentBalance = account.balance;
    if (currentBalance < amountToWithdraw) {
        console.log("Insufficient fund!");
        return;
    }

    account.balance = currentBalance - amountToWithdraw;
    _logAccountInfo(account);
}

function _getAccountNumber() {
    return readlineSync.question("Please input account number: ");
}

function _logAccountInfo(account) {
    if (account) {
        console.log("Your account is: ", account);
    } else {
        console.log("There is no account with provided info");
    }
}

function printOptionMenu() {
    const menu = `
    === Banking application ===
    1. Find an account
    2. Update balance
    0. Exit the program
    `
    console.log(menu);
}

myBankApp();