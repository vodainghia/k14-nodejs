// Example
/**
 * Given String: hey, tui ten Teo, ban cung ten Teo ah?
 * Output:
 * "ten": 2
 * "Teo": 2
 * "tui": 1
 * ...
 * 
 * Please solve the excersize for countWords in the session by using object, not a Map (do NOT use Object.entries() method to get a map)
 * The program need to allow user to input a sentence, not hard code
 */

const readline = require('readline-sync');
const givenStr = getUserInput();

// applying filter(w => w !== '') here to remove empty string. Other concise approach is filter(Boolean), Boolean will convert falsy value to false.
let individualWords = givenStr.replace(/[^a-zA-Z\s]/g, '').split(' ').filter(w => w !== '');
let result = countWordByObject(individualWords);
console.log(result);

function countWordByObject(individualWords) {
    let wordsMap = {};

    for (const word of individualWords) {
        if (wordsMap.hasOwnProperty(word)) {
            wordsMap[word] += 1;
        } else {
            wordsMap[word] = 1;
        }

    }

    return wordsMap;
}

function getUserInput() {
    return readline.question('Please enter your string: ');
}