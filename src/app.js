const fastifyPlugin = require('fastify-plugin');

const repositoryPlugin = require('./repositories/repositoryPlugin.js');
const servicePlugin = require('./services/servicePlugin');

/**
 * 
 * @param {Fastify object} fastify 
 * @param {*} options 
 */
async function app(fastify, options) {
    fastify.register(require('@fastify/cors'));
    fastify.register(repositoryPlugin);
    fastify.register(servicePlugin);

    //register test routes
    fastify.register(require('./routes/api/api.routes'), { prefix: '/api' });
}

module.exports = fastifyPlugin(app);