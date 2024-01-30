// Function expression
const divide = function (a, b) {
    return a / b;
}

// Function declaration
const isEvenNumber = function (number) {
    return number % 2 === 0;
}


module.exports = {
    teo: divide, // Left: tên bên ngoài gọi, Right: tên gốc
    isEvenNumber: isEvenNumber
}