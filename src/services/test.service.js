class TestService {
    constructor() {
        // inject a repo here
    }

    async PingCheck() {
        return 'pong';
    }
}

module.exports = TestService
