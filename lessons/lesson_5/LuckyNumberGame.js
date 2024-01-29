const readline = require('readline-sync');

/**
 * === GAME MENU ===
 * "1. Generate a random number (1-10)"
 * "0. Exit!"
 */
let isPlaying = true;
while (isPlaying) {
    printGameMenu();
    let userOption = getUserInput();

    if (userOption == 0) {
        isPlaying = false;
    } else if (userOption == 1) {
        let randomNum = Math.floor(Math.random() * 10) + 1;
        console.log(`Your lucky number is ${randomNum}!`);
    } else {
        console.log('Invalid option! Please try again!');
    }
}

console.log('See you soon!');

function printGameMenu() {
    console.log('=== GAME MENU ===');
    console.log('"1. Generate a random number (1-10)"');
    console.log('"0. Exit!"');
    console.log('');
}

function getUserInput() {
    return readline.question('Please select an option: ');
}