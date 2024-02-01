let myString = 'gfdy45654rfj ';
console.log(myString);

// length
const myStrLength = myString.length;
console.log(myStrLength);

// Get a character at a position
for (let index = 0; index < myStrLength; index++) {
    //console.log(myString.charAt(index));
    
}

// Get rid of (= remove) spaces at start and the end
console.log(myString.trim().length);

// Replace
let tobeReplacedStr = 'tmoMi nmaym gmaMpm nhmamu 7mh';
console.log(tobeReplacedStr.replace(/m/gi, '')); // g: global, i: insensitive

let a = '200mins';
console.log(a.replace(/[^0-9]+/i, ''));
console.log(Number('a 22')); // NaN

// Concat
console.log('Hello '.concat('world'));

// Backstick | String template
console.log(`${myString} la mot chuoi.`);

// Substring()
let strToBeCut = '1234567890'; // length = 10
const startIndx = 2; // inclusive
const endIndx = 11; // exclusive
console.log(strToBeCut.substring(startIndx, endIndx));

// slice()

//
getDomainName('https://google.com/');
function getDomainName(url) {
    let domain;
    const indicator = '://';
    const indexOfIndicator = url.indexOf(indicator);

    if (indexOfIndicator < 0) {
        const errMsg = `Invalid url, provided url was: ${url}`;
        throw Error(errMsg);
    }

    const domainStartIndex = indexOfIndicator + indicator.length;
    return  url.substring(domainStartIndex).replace(/\//gi,'');
}

console.log(getDomainName('https://google.com/'));

// Split()
let googleUrl = 'https://google.com';
console.log(googleUrl.split('://')); // [ 'https', 'google.com' ]

// Number(string) -> number