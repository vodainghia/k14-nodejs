// Sort an integer array from min to max

const intArr = [10, 2, 5, 4, 1, 6, 7, 8, 3];

// To compare the below results:
console.log(intArr.sort((a, b) => a - b));

// Applying Bubble Sort
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[i];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

const sortedArr = bubbleSort(intArr.slice());
console.log("\nBubble Sort: ", sortedArr);

// Applying Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftArr = mergeSort(arr.slice(0, mid));
    const rightArr = mergeSort(arr.slice(mid));

    return merge(leftArr, rightArr);
}

function merge(leftArr, rightArr) {
    const mergedArr = [];
    let i = 0, j = 0;

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] < rightArr[j]) {
            mergedArr.push(leftArr[i++]);
        } else {
            mergedArr.push(rightArr[j++]);
        }
    }

    while (i < leftArr.length) {
        mergedArr.push(leftArr[i++]);
    }

    while (j < rightArr.length) {
        mergedArr.push(rightArr[j++]);
    }

    return mergedArr;
}

const mergedArr = mergeSort(intArr.slice());
console.log("\nMerge Sort: ", mergedArr);
