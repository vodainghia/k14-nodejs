/**
 * Get input from user about height(m) and weight(kg) then calculate BMI
 * Underweight = <18.5 
 * Normal weight = 18.5 – 24.9
 * Overweight = 25–29.9
 * Obesity = BMI of 30 or greater
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcBMI(height, weight) {
    return weight / height / height;
}

function evaluateBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal weight";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}

function replaceCommaWithDot(value) {
    return value.replace(',', '.');
}

function validateInput(value) {
    const parsedValue = parseFloat(replaceCommaWithDot(value));
    return !isNaN(parsedValue) && parsedValue > 0;
}

function getUserInput(question, validator, callback) {
    rl.question(question, input => {
        if (validator(input)) {
            callback(parseFloat(replaceCommaWithDot(input)));
        } else {
            console.log('Invalid input! Please try again with a valid numeric value!');
            getUserInput(question, validator, callback);
        }
    });
};

getUserInput('Please input your height in meters (e.g: 1.79): ', validateInput, (height) => {
    getUserInput('Please input your weight in kilograms (e.g.: 75): ', validateInput, (weight) => {
        const bmi = calcBMI(height, weight);
        const evaluate = evaluateBMI(bmi);
        console.log(`Your BMI is ${bmi.toFixed(1)} and your BMI category is ${evaluate}!`);
        rl.close();
    });
});
