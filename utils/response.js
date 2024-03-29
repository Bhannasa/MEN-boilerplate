const responseTemplate = async (success, message, data, error) => {
    return {
        success,
        message,
        data: data === null ? {}: await (data),
        error: !error || Object.keys(error)?.length == 0 ? {} : await (error)
    }
}

const responseMessage = {
    serverError: "Some server error occured",
    unauthorisedAccess: "Unauthorized access!",
    invalidToken: "Invalid token used!",
    wrongPassword: "Wrong password entered.",
    differentToken: "Don't try to create a different token!",
    tokenNotFound: "No token found in 'authorization' header",
    badGateway: "Unknown route discovered. Check for correct URL and method.",
    getDataSuccess: data => { return `${data[0].toUpperCase() + data.slice(1).toLowerCase()} successfully retrieved!` },
}

module.exports = { responseMessage, responseTemplate }