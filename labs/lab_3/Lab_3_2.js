// Finding maximum value/minimum value from an integer array
const { findMinNumberInArray, findMaxNumberInArray } = require('../../lessons/utils/ArrayHelper');

const intArr = [1, 3, 5, 3, 2, 1, 6, 9, 10, 13, 7];

// to compare results
console.log(intArr.reduce((a, b) => Math.max(a, b)));
console.log(intArr.reduce((a, b) => Math.min(a, b)));

// Result
console.log("The max value in the integer array is: ", findMaxNumberInArray(intArr));
console.log("The min value in the integer array is: ", findMinNumberInArray(intArr));
