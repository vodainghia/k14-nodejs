// Finding maximum value/minimum value from an integer array

const intArr = [1, 2, 3, 4, 10, 6, 7, 8, 3];

console.log("The max value in the integer array is: ", intArr.reduce((a, b) => Math.max(a, b)));

console.log("The min value in the integer array is: ", intArr.reduce((a, b) => Math.min(a, b)));
