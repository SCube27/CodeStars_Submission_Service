const fastify = require('fastify')({ logger: true }); // calling the fastify constructor 

const app = require('./app');
const connectToDB = require('./config/dbConfig');
const serverConfig = require('./config/serverConfig');

// setting the routes
fastify.register(app);

// starting the server
fastify.listen({ port: serverConfig.PORT }, async (err) => {
    if(err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server started at port ${serverConfig.PORT}`);
    await connectToDB();
});