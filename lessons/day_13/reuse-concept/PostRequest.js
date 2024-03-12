const Request = require("./Request");

class PostRequest extends Request {

    setMethod() {
        super.setMethod('POST');
    }

}

module.exports = PostRequest;
