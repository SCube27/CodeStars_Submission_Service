const submissionQueue = require("../queues/submission.queue");

module.exports = async function(payload) {
    await submissionQueue.add("SubmissionJob", payload);
}