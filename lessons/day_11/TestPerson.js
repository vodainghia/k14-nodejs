const Person = require('./Person');
const teo = new Person('Teo', 28);
console.log(teo.name);
console.log(teo.age);

teo.name = 'Teo dep trai';
console.log(teo.name);