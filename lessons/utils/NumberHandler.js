// Function expression
const divide = function (a, b) {
    return a / b;
}

// Function declaration
function isEvenNumber(number) {
    return number % 2 === 0;
}

module.exports = {
    teo: divide, // Left: tên bên ngoài gọi, Right: tên gốc
    isEvenNumber: isEvenNumber
}