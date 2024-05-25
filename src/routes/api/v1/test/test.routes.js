const testController = require("../../../../controllers/test.controller");

async function testRoute(fastify, options) {
    fastify.get('/ping', testController.pingRequest);
}

module.exports = testRoute;