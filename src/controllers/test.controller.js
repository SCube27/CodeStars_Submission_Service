async function pingRequest(req, res) {
    const response = await this.testService.PingCheck();
    return res.send({ data: response });
}

module.exports = {
    pingRequest,
};