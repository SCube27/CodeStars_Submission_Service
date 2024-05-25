const fastify = require('fastify')({ logger: true }); // calling the fastify constructor 

const app = require('./app');

const PORT = 5000;

// setting the routes
fastify.register(app);

// starting the server
fastify.listen({ port: PORT }, (err) => {
    if(err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server started at port ${PORT}`);
});