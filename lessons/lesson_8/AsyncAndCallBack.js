/**
 * 1. Send request -> response
 * 2. Process response
 * 3. Validate response
 * 
 */


// Asynchronous
// callback: sẽ "gọi lại" nó sau khi cái chứa nó đã xử lí xong
function sendRequest(url, callback) {
    console.log('1. Sending request to ', url);
    
    setTimeout(function () {
        callback({ status: 200 });
    }, 1000);
}

// Asynchronous
function processResponse(response, callback) {
    console.log('2. Processing response: ', response);

    setTimeout(function () {
        callback(response.status);
    }, 1000);
}

// Synchronous
function validateResponse(statusCode) {
    console.log('3. Validating...');

    if (statusCode === 200) {
        console.log('Passed!');
    } else {
        console.error('Failed, status code: ', statusCode);
    }
}

const targetUrl = 'https://sdetpro.com';

// Handle async to sync, below are sequence
// THIS IS CALLBACK HELL!
sendRequest(targetUrl, function (response) {
    processResponse(response, function (statusCode) {
        validateResponse(statusCode);
    });
});