// Using Promise, Thenable to resolve Callback Hell
function asyncFunction01(param1) {
    console.log('Processing: ', param1);

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const returnedValue = 'asyncFunction01: ' + param1;
            resolve(returnedValue);
        }, 1000);
    });
}

function asyncFunction02(param2) {
    console.log('Processing: ', param2);

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const returnedValue = 'asyncFunction02: ' + param2;
            resolve(returnedValue);
        }, 1000);
    });
}

function asyncFunction03(param3) {
    console.log('Processing: ', param3);

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const returnedValue = 'asyncFunction03: ' + param3;
            resolve(returnedValue);
        }, 1000);
    });
}

/**
 * Usage async/await
 * async: asynchronous function indicator
 * await: to wait result from and async function
 * await is only valid in async function and the top level bodies of modules
 */

async function run() {
    const returnedValue1 = await asyncFunction01('param1');
    const returnedValue2 = await asyncFunction02(returnedValue1);
    const returnedValue3 = await asyncFunction03(returnedValue2);
    console.log(returnedValue3);
}

run();