// Allow user to input a number, print out it’s an odd or even number

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

determineOddOrEven = (num) => {
    return num % 2 === 0 ? "Even" : "Odd";
}

rl.question('Please input a number: ', (num) => {
    const result = determineOddOrEven(num);
    console.log(`This is an ${result} number!`);
    rl.close();
});