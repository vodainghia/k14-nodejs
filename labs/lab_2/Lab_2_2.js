// Allow user to input a number, print out it’s an odd or even number

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

determineOddOrEven = (num) => {
    return (num & 1) === 0 ? "Even" : "Odd";
}

function validateInput(value) {
    const parsedValue = parseInt(value, 10);
    return !isNaN(parsedValue);
}

function getUserInput(question, validator, callback) {
    rl.question(question, input => {
        if (validator(input)) {
            callback(parseInt(input));
        } else {
            console.log('Invalid input! Please try again with a valid integer!');
            getUserInput(question, validator, callback);
        }
    });
};

getUserInput('Please input a number: ', validateInput, (num) => {
    const result = determineOddOrEven(num);
    console.log(`This is an ${result} number!`);
    rl.close();
});