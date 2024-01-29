/**
 * 1. Do sth before checking the condition for the FIRST iteration
 */

const readline = require('readline-sync');

let guessingTime = 0;
let randomNumber = getRandomNumber();
console.log(randomNumber);
do {
    let userNum = getUserNumber();
    if (userNum == randomNumber) {
        console.log('Hooray!');
        break;
    }
    guessingTime++;
} while (guessingTime < 3);

if (guessingTime === 3) {
    console.log('Wish you luck next time!');
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function getUserNumber() {
    return readline.question('Please enter your number: ');
}