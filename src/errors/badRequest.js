const BaseError = require('./baseError');
const { StatusCodes } = require('http-status-codes')

class BadRequestError extends BaseError {
    constructor(details) {
        super('Not able to create submission', StatusCodes.BAD_REQUEST, details);
    }
}

module.exports = BadRequestError;