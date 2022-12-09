const { default: jwt } = require('jsonwebtoken')
const { responseTemplate, responseMessage } = require("../utils/response");

const jwt_token_secret = process.env.JWT_TOKEN_SECRET;

const JWT = async (req, res, next) => { 
    let { authorization } = req.headers;
    if (authorization) {
        try {
            let decryptedToken = jwt.verify(authorization, jwt_token_secret);

            if (decryptedToken) {
                // 
                return next();
            }
            else {
                return res.status(401).json(await responseTemplate(false, responseMessage.invalidToken, null, null))
            }
        } catch (err) {
            if (err.message == "invalid signature") return res.status(403).json(await responseTemplate(false, responseMessage.differentToken, null, null))
            return res.status(401).json(await responseTemplate(false, responseMessage.invalidToken, null, null))
        }
    } else {
        return res.status(401).json(await responseTemplate(false, responseMessage.tokenNotFound, null, null))
    }
}
module.exports = JWT