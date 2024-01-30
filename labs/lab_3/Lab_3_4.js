// Merge 2 SORTED integer array into one SORTED array

const intArr1 = [1, 28, 16, 12, 34];
const intArr2 = [1, 99, 16, 27, 13];
const mergedArr = [...intArr1, ...intArr2];

// To compare with Quick Sort 
console.log(intArr1.concat(intArr2).sort((a, b) => a - b));
// OR
console.log(mergedArr.sort((a, b) => a - b));

function merge(intArr1, intArr2) {
    const firstLength = intArr1.length;
    const secondLength = intArr2.length;

    let firstPointer = 0;
    let secondPointer = 0;
    let mergeArr = [];

    while (firstPointer < firstLength && secondPointer < secondLength) {
        if (intArr1[firstPointer] <= intArr2[secondPointer]) {
            mergeArr.push(intArr1[firstPointer++]);
        } else {
            mergeArr.push(intArr2[secondPointer++]);
        }
    }

    while (firstPointer < firstLength) {
        mergeArr.push(intArr1[firstPointer++]);
    }

    while (secondPointer < secondLength) {
        mergeArr.push(intArr2[secondPointer++]);
    }

    return mergeArr;
}

console.log("\nNew approach: ", merge(intArr1, intArr2));