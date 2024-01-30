const filterEvenNumbers = function (value, index, array) {
    return value % 2 === 0;
}

const filterOddNumbers = function (value, index, array) {
    return value % 2 !== 0;
}

const convertToEvenNumbers = function (value, index, array) {
    return value % 2 !== 0 ? value + 1 : value;
}
const sortNumberASC = function (firstNum, secondNum) {
    return firstNum - secondNum;
}

const sortNumberDESC = function (firstNum, secondNum) {
    return secondNum - firstNum;
}

const findMaxNumberInArray = (arr) => {
    let max = arr.length != 0 ? arr[0] : 0;
    for (const num of arr) {
        max = num > max ? num : max;
    };

    return max;
}

const findMinNumberInArray = (arr) => {
    let min = arr.length != 0 ? arr[0] : 0;
    for (const num of arr) {
        min = num < min ? num : min;
    };

    return min;
}

module.exports = {
    filterEvenNumbers: filterEvenNumbers,
    filterOddNumbers: filterOddNumbers,
    convertToEvenNumbers: convertToEvenNumbers,
    sortNumberASC: sortNumberASC,
    sortNumberDESC: sortNumberDESC,
    findMaxNumberInArray: findMaxNumberInArray,
    findMinNumberInArray: findMinNumberInArray,
}
