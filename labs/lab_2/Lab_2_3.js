/**
 * Get input from user about height(m) and weight(kg) then calculate BMI
 * Underweight = <18.5 
 * Normal weight = 18.5 – 24.9
 * Overweight = 25–29.9
 * Obesity = BMI of 30 or greater
 * Suggest user to increase/decrease weight
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcBMI(height, weight) {
    return parseFloat(weight / height / height);
}

function calcWeightAdjustment(height, bmi, targetBMI) {
    return Math.abs(targetBMI - bmi) * height * height;
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

function suggestWeight(height, bmi) {
    if (bmi < 18.5) {
        return `You should increase by ${calcWeightAdjustment(height, bmi, 18.5).toFixed(1)} kg`;
    } else if (bmi < 25) {
        return "You should maintain your weight";
    } else {
        return `You should decrease by ${calcWeightAdjustment(height, bmi, 25).toFixed(1)} kg`;
    }
}

rl.question('Please input your height (m): ', (height) => {
    rl.question('Please input your weight (kg): ', (weight) => {
        const bmi = calcBMI(height, weight);
        const evaluate = evaluateBMI(bmi);
        const suggestion = suggestWeight(height, bmi);
        console.log(`Your BMI is ${bmi.toFixed(1)} and your BMI category is ${evaluate}. ${suggestion}!`);
        rl.close();
    });
});
