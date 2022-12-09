const User = require("../models/User");
const { responseTemplate, responseMessage } = require("../utils/response");

const login = async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json(await responseTemplate(false, responseMessage.serverError, null, null));
    }
}

module.exports = { login };