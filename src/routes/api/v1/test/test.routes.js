const testController = require("../../../../controllers/submission.controller");

async function testRoute(fastify, options) {
    fastify.get('/ping', testController.pingRequest);
}

module.exports = testRoute;