// while (isSthStillTrue) {
//     // logic
// }

let index = 0;

for (; index < 5; ) {
    console.log(index);
    index++
}

// 1. There is a need to use the initialization express outside of the loop
// 2. For loop - loop steps are fixed. While loop - loop steps are (dynamic) not fixed
console.log(index); // value here is the first one that not satisfy the condition
