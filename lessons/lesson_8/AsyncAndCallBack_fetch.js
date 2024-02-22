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

    // fetch returns Promise
    // Thenable chaining
    /**
     * callback
     *      anotherCallback
     *          anotherAnotherCallback
     * 
     * => callback().
     *      then().
     *          anotherCallback().
     *              then().
     *                  anotherAnotherCallback();
     */
    fetch(url).then(function (response) {
        callback(response);
    });
}

// Synchronous
function processResponse(response) {
    console.log('2. Processing response: ', response);
    return response.status;
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

// Usage
const targetUrl = 'https://jsonplaceholder.typicode.com/todos/1';

sendRequest(targetUrl, function (response) {
    const statusCode = processResponse(response);
    validateResponse(statusCode);
});