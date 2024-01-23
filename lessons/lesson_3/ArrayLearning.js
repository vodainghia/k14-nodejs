const { filterEvenNumbers,
    convertToEvenNumbers,
    sortNumberASC,
    sortNumberDESC } = require('../utils/ArrayHelper');

// Literal declaration
let myNumArr = [1, 2, 3, 4, 5];

// Via Array constructor: not recommended
let viaConstructor = new Array(1, 2, 3, 4, 5);

let arrLength = myNumArr.length;

for (let index = 0; index < arrLength; index++) {
    const element = myNumArr[index] * 1;
    myNumArr[index] = element;
}

// for (const num of myNumArr) {
//     console.log(num);
// }

// FILTER:
// 1. Most of methods to process an array can accept a function as a parameter
let evenNumbers = myNumArr.filter(filterEvenNumbers);

/** Will return error because the filterEvenNumbers is not intialed => const not has hoisting
*  const filterEvenNumbers = function() {
*    // logic
* }
 */

// To fix this, we need to use function declaration: function filterEvenNumbers() {}

// 2. The function to process the array: (value, index, array)
function filterEvenNumber(value, index, array) {
    return value % 2 === 0;
}

for (const evenNum of evenNumbers) {
    console.log(evenNum);
}

// MAP: 
// Map sth -> [Same rule/logic] -> sthElse:
const evenNumArray = myNumArr.map(convertToEvenNumbers);

for (const value of evenNumArray) {
    console.log(value);
}

// SORT: Asc, Desc
let myStrings = ['B', 'A', 'C'];
myStrings.sort();
myStrings.reverse();

// SORT number
let complexNumArray = [100, 22, 19];
complexNumArray.sort(); // [ 100, 19, 22 ] Wrong result because they will be converted to string first
complexNumArray.sort(sortNumberDESC); // Provide compare function


// forEach:
let str = '';
myNumArr.forEach(num => {
    let numToStr = convertToNoSpaceStr(num);
    str += numToStr;
});

function convertToNoSpaceStr(value) {
    return value.toString();
}

// PRINT RESULT
console.log(str);