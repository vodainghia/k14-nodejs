const deepCopyObject = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}

module.exports = {
    deepCopyObject: deepCopyObject,
}