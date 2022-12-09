const { responseTemplate, responseMessage } = require("../utils/response");

const BAD_GATEWAY = async ( req, res ) => {
    return res.status(404).json(await responseTemplate(false, responseMessage.badGateway, {}, {}));
}
module.exports = BAD_GATEWAY;