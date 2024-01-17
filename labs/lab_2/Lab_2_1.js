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
    return (weight / height / height).toFixed(1);
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

rl.question('Please input your height (m): ', (height) => {
    rl.question('Please input your weight (kg): ', (weight) => {
        const bmi = calcBMI(height, weight);
        const evaluate = evaluateBMI(bmi);
        console.log(`Your BMI is ${bmi} and your BMI category is ${evaluate}!`);
        rl.close();
    });
});
