function sendRequest(url) {
    return fetch(url).then(res => {
        return res.json();
    });
}

module.exports = {
    sendRequest,
};