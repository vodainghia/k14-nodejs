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

module.exports = {
    filterEvenNumbers: filterEvenNumbers,
    filterOddNumbers: filterOddNumbers,
    convertToEvenNumbers: convertToEvenNumbers,
    sortNumberASC: sortNumberASC,
    sortNumberDESC: sortNumberDESC,
}
