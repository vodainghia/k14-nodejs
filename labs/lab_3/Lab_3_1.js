// Count how many odd, even number(s) in an integer array

const intArr = [1, 2, 3, 4, 5, 6, 7, 8, 3];
const evenQuantity = intArr.filter(num => (num & 1) === 0).length;

console.log(`There are ${evenQuantity} even numbers and ${intArr.length - evenQuantity} odd numbers in the array`);
