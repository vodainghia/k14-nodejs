const Post = require('../../labs/lab_11/Post');

// Function declaration
function add(a, b) {
    return a + b;
}

// Arrow function | FUnction expression, not hoisting
const addArrow = (a, b) => {
    return a + b;
}

// Implicitly return
const addArrow2 = (a, b) => a + b;

// No params
const sayHello = () => {
    console.log('Hello');
}

console.log(sayHello()); // print Hello and undefined, because sayHello() returns nothing so it's undefined

// Destructure/Destructuring
const tempPost = {id: 1, body: 'This is post body'};
const convertPost = ({ id, body }) => new Post(id, body);
console.log(convertPost(tempPost));

// Lexical "this" binding
const person = {
    name: 'Teo',
    sayHello: function() {
        setTimeout(function() {
            console.log(`Hellu, tui ten ${this.name}`); // undefined, "this" refers to global scope, "name" is not existing
        }, 500);

        setTimeout(() => {
            console.log(`Hellu, tui ten ${this.name}`); // Teo, "this" refers to object
        }, 500);
    }
}

person.sayHello();

