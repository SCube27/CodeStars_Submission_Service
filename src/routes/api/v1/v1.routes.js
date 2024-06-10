async function v1Plugin(fastify, options) {
    fastify.register(require('./test/test.routes'), { prefix: '/test' });
    fastify.register(require('./submission.routes'), { prefix: '/submissions' });
}

module.exports = v1Plugin;