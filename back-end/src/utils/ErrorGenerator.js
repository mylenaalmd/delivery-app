class ErrorGenerator extends Error {
    constructor(statusCode, message) {
        console.log('oi, estou no errorgenerator .....>>>', statusCode, message);
        super(message);
        this.statusCode = statusCode;
    }
}

module.exports = {
    ErrorGenerator,
};