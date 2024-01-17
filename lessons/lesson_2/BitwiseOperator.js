/**
 * firstCondition && secondCondition -> true ONLY them both are true -> Will stop running while the first condition statement is false
 * firstCondition || secondCondition -> false ONLY them both are false
 * 
 * firstCondition & secondCondition -> Will run both condition statements even the first condition statement is false
 * firstCondition | secondCondition
 * 
 */


if(getFirstNum() !== 0 & getSecondNum() !== 0) {
    console.log("The evaluated expression is true");
}

function getFirstNum() {
    console.log("Calling method 1...");
    return 0;
}

function getSecondNum() {
    console.log("Calling method 2...");
    return 2;
}