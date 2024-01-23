function filterEvenNumbers(value, index, array) {
    return value % 2 === 0;
}

function convertToEvenNumbers(value, index, array) {
    return value % 2 !== 0 ? value + 1 : value;
}
function sortNumberASC(firstNum, secondNum) {
    return firstNum - secondNum;
}

function sortNumberDESC(firstNum, secondNum) {
    return secondNum - firstNum;
}

module.exports = {
    filterEvenNumbers: filterEvenNumbers,
    convertToEvenNumbers: convertToEvenNumbers,
    sortNumberASC: sortNumberASC,
    sortNumberDESC: sortNumberDESC,
}
