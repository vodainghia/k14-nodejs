/**
 * When sending a request: URL, headers (method)
 * Get response
 * Verify response status
 * 
 */

// Super class/Parent class
const RequestParent = require('./RequestParent');
class Request extends RequestParent {

    constructor(url, headers = {}) {
        super();
        this.url = url;
        this.headers = headers;
    }

    setMethod(method) {
        // ... : spread syntax => copy an array or object
        this.headers = { ...this.headers, method: method };
    }

    send() {
        console.log(`Sending request with header ${JSON.stringify(this.headers)}`);
        this.response = { statusCode: 200 };
    }

    verifyResponseStatus() {
        console.log(`Status code ${this.response.statusCode}`);
    }
    
}

module.exports = Request;
