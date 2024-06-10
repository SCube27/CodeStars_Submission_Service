const fastifyPlugin = require('fastify-plugin');

const repositoryPlugin = require('./repositories/repositoryPlugin.js');
const servicePlugin = require('./services/servicePlugin');

/**
 * 
 * @param {Fastify object} fastify 
 * @param {*} options 
 */
async function app(fastify, options) {
    await fastify.register(require('@fastify/cors'));
    await fastify.register(repositoryPlugin);
    await fastify.register(servicePlugin);

    //register test routes
    await fastify.register(require('./routes/api/api.routes'), { prefix: '/api' });
}

module.exports = fastifyPlugin(app);