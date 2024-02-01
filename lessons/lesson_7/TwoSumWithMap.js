// Example: Two Sum problem
const arr = [3, 7, 22, 1];
const target = 8;

console.log(twoSumWithMap(arr));

function twoSumWithMap(arr) {
    let numsMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        const findingNum = target - arr[i];

        if (numsMap.has(findingNum)) {
            return [numsMap.get(findingNum), i];
        }

        numsMap.set(arr[i], i);
    }

    return [];
}