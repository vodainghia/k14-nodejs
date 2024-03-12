const Request = require("./Request");

class GetRequest extends Request {

    setMethod() {
        super.setMethod('GET');
    }

}

module.exports = GetRequest;
