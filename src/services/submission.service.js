const { fetchProblemDetails } = require('../apis/problemAdminApi');
const BadRequestError = require('../errors/badRequest');
const InternalServerError = require('../errors/internalServer');
const SubmissionProducer = require('../producers/submissionQueue.producer');

class SubmissionService {
    constructor(submissionRepository) {
        // inject a repo here
        this.submissionRepository = submissionRepository;
    }

    async PingCheck() {
        return 'pong';
    }

    async addSubmission(submissionPayload) {
        const problemId = submissionPayload.problemId;

        const problemAdminApiResponse = await fetchProblemDetails(problemId);

        if(!problemAdminApiResponse) {
            throw new InternalServerError('Failed to create a submission in the repository');
        }

        const languageCodeStub = problemAdminApiResponse.data.codeStubs.find(codeStub => codeStub.language.toLowerCase() === submissionPayload.language.toLowerCase());

        console.log(languageCodeStub) 

        submissionPayload.code = languageCodeStub.startSnippet + "\n\n" + submissionPayload.code + "\n\n" + languageCodeStub.endSnippet;

        const newSubmission = await this.submissionRepository.createSubmission(submissionPayload);
        // TODO: Add error handling here
        if(!newSubmission) {
            throw new BadRequestError(`Failed to create a Submission in the repository!`);
        }

        const response = await SubmissionProducer({
            [newSubmission._id]: {
                code: newSubmission.code,
                language: newSubmission.language,
                inputCase: problemAdminApiResponse.data.testCases[0].input,
                outputCase: problemAdminApiResponse.data.testCases[0].output,
            }
        });
        return {queueResponse: response, newSubmission};
    }
}

module.exports = SubmissionService;
