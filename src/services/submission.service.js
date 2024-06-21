const BadRequestError = require('../errors/badRequest');
const SubmissionProducer = require('../producers/submissionQueue.producer');

class SubmissionService {
    constructor(submissionRepository) {
        // inject a repo here
        this.submissionRepository = submissionRepository;
    }

    async PingCheck() {
        return 'pong';
    }

    async addSubmission(submission) {
        const newSubmission = await this.submissionRepository.createSubmission(submission);
        // TODO: Add error handling here
        if(!newSubmission) {
            throw new BadRequestError(`Failed to create a Submission in the repository!`);
        }

        const response = await SubmissionProducer(newSubmission);
        return {queueResponse: response, newSubmission};
    }
}

module.exports = SubmissionService;
