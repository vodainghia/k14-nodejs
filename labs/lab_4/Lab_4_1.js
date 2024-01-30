/* Lab 4.1
Creating 1 object representing Bank Count Number with below structure:
{
    accountNumber: String,
    routingNumber: String,
    balance: Number
}
. Creating another Bank Account Object which clone from the previous one and update the accountNumber only. Put them into an array call: bankAccounts

. Write a console interface app to:

allow user to find account by using accountNumber, if the account is existing, print the name and balance info out(NOT all the object)
allow user to withdraw the money and avoid user to take more than current balance

Note: Strongly recommend to create functions to process each tasks
=== Banking application ===
    1. Find an account
    2. Update balance
    0. Exit the program 
*/

const { deepCopyObject } = require('../../lessons/utils/ObjectHelper');
const readline = require('readline-sync');

const firstAccount = {
    accountNumber: '1234',
    routingNumber: '666333666',
    balance: 60000000
};

const secondAccount = deepCopyObject(firstAccount);
secondAccount.accountNumber = '5678';
const bankAccounts = [firstAccount, secondAccount];

let isContinue = true;
while (isContinue) {
    printUserMenu();
    const userInput = getUserInput();

    switch (userInput) {
        case '0':
            console.log('\nThank for utilizing. See ya!\n');
            isContinue = false;
            break;
        case '1':
            findAccount(bankAccounts);
            break;
        case '2':
            updateBalance(bankAccounts);
            break;
        default:
            console.log('\nInvalid input, please try again!\n');
            break;
    }
}

function findAccount(bankAccounts) {
    while (true) {
        const inputtedAccNum = readline.question('Please enter the account number (Please input "0" to go back): ');

        if (inputtedAccNum === '0') {
            return;
        }

        const result = bankAccounts.find(acc => acc.accountNumber === inputtedAccNum);

        if (result) {
            console.log(`\nYour account number ${result.accountNumber} has balance: ${result.balance.toLocaleString()}.\n`);
            return result;
        } else {
            console.log('\nYour account number not found. Please try again!\n');
        }
    }
}

function updateBalance(bankAccounts) {
    let withdrawMoney;
    const bankAcc = findAccount(bankAccounts);

    if (!bankAcc) {
        return;
    }

    while (true) {
        withdrawMoney = parseInt(readline.questionInt('Please input a valid value to withdraw? (Please input "0" to go back): '), 10);

        if (withdrawMoney === '0') {
            return;
        }

        if (withdrawMoney <= bankAcc.balance) {
            break;
        } else {
            console.log('\nInvalid amount. Please try again!\n');
        }
    }

    bankAcc.balance -= withdrawMoney;
    console.log(`\nYou have withdraw successfully ${withdrawMoney}. New balance: ${bankAcc.balance.toLocaleString()}\n`);
}

function getUserInput() {
    return readline.question('Please enter your selection: ');
}

function printUserMenu() {
    const menu = `
    === Banking application ===
        1. Find an account
        2. Update balance
        0. Exit the program
    `
    console.log(menu);
}
