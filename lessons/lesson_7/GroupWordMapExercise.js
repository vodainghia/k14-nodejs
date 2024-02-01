// Example
/**
 * Given String: hey, tui ten Teo, ban cung ten Teo ah?
 * Output:
 * "ten": 2
 * "Teo": 2
 * "tui": 1
 * ...
 */

const givenStr = 'hey, tui ten Teo, ban cung ten Teo ah?';

let individualWords = givenStr.replace(/[^a-zA-Z\s]/g, '').split(' ');
console.log(individualWords);

let result = countWord(individualWords);
console.log(result);

function countWord(individualWords) {
    let wordsMap = new Map();

    for (const word of individualWords) {
        if (!wordsMap.has(word)) {
            wordsMap.set(word, 1);
        } else {
            wordsMap.set(word, wordsMap.get(word) + 1);
        }
    }

    return wordsMap;
}
