class NumberHandler {
    // Function expression
    static divide = function (a, b) {
        return a / b;
    }

    // Function declaration
    static isEvenNumber = function (number) {
        return number % 2 === 0;
    }
}

module.exports = NumberHandler;

// module.exports = {
//     teo: divide, // Left: tên bên ngoài gọi, Right: tên gốc
//     isEvenNumber: isEvenNumber
// }