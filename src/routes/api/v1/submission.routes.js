const { createSubmission } = require("../../../controllers/submission.controller");
const addSubmissionSchema = require("../../../dto/addSubmissionDto");

async function submissionRoutes(fastify, options) {
    fastify.post('/', {
        schema: {
            body: addSubmissionSchema,
        },
        handler: createSubmission,
    });
}

module.exports = submissionRoutes;