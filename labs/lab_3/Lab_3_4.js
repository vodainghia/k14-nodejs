// Merge 2 SORTED integer array into one SORTED array

const intArr1 = [1, 28, 16, 12, 34];
const intArr2 = [1, 99, 16, 27, 13];
const mergedArr = [...intArr1, ...intArr2];

console.log(intArr1.concat(intArr2).sort((a, b) => a - b));
// OR
console.log(mergedArr.sort((a, b) => a - b));
