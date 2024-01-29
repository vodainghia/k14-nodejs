// Merge 2 SORTED integer array into one SORTED array

const intArr1 = [1, 28, 16, 12, 34];
const intArr2 = [1, 99, 16, 27, 13];
const mergedArr = [...intArr1, ...intArr2];

// To compare with Quick Sort 
console.log(intArr1.concat(intArr2).sort((a, b) => a - b));
// OR
console.log(mergedArr.sort((a, b) => a - b));

// Applying Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const leftArr = [];
    const equalArr = [];
    const rightArr = [];

    for (const num of arr) {
        if (num < pivot) {
            leftArr.push(num);
        } else if (num > pivot) {
            rightArr.push(num);
        } else {
            equalArr.push(num);
        }
    }

    return [...quickSort(leftArr), ...equalArr, ...quickSort(rightArr)];
}

const quickSortedArr = quickSort(mergedArr.slice());
console.log("\nQuick Sort: ", quickSortedArr);
