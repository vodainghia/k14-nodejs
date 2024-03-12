const Horse = require('./Horse');
const Tiger = require('./Tiger');
const Dog = require('./Dog');
const RacingController = require('./RacingController');

const horse = new Horse();
const tiger = new Tiger();
const dog = new Dog();

const winnerMsg = RacingController.getWinner([horse, tiger, dog]);
console.log(winnerMsg);
