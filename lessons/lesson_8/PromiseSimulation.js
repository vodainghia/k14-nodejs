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

// Usage
// Still not friendly to use
asyncFunction01('param1')
    .then(function (returnedValue1) {
        return asyncFunction02(returnedValue1);
    })
    .then(function (returnedValue2) {
        return asyncFunction03(returnedValue2);
    })
    .then(function (returnedValue3) {
        console.log(returnedValue3);
    });