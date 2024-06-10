async function pingRequest(req, res) {
    const response = await this.testService.PingCheck();
    return res.send({ data: response });
}

// TODO: Add a validation layer using zod
async function createSubmission(req, res) {
    const response = await this.submissionService.addSubmission(req.body);

    res.status(201).json({
        error: {},
        data: response,
        success: true,
        message: "Added a new submission successfully",
    });
}

module.exports = {
    pingRequest,
    createSubmission,
};