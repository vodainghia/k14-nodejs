/**
 * DRY
 * Group same logic category into same place
 * -> Maintainable -> extendable -> reliable
 */

// Function declaration | It's hoisted to the top of scope
function functionName(param1, param2) {
    // Do something
}

// {}: scope/code block/code body

// Function expression | It's NOT hoisted like Function declaration
const addNumber = function(param1, param2) {
    return param1 + param2;
}

console.log(addNumber(1, 2));
