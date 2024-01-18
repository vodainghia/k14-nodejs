//const NumberMethods = require('../utils/NumberHandler');

// Destructuring: Phân giải ra, chỉ lấy những gì mình cần xài.
const { teo, isEvenNumber } = require('../utils/NumberHandler');

// dot notation
console.log("10 / 2: ", teo(10, 2));
console.log("Is 5 even number: ", isEvenNumber(5));