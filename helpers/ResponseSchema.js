var empty = require("./Empty");
var moment = require("moment");

module.exports = function(res, data, status) {

    var responseSchema = {
        timestamp: moment.now(),
        data: null,
        message: "OK",
        error: false
    };

    if (empty(status)) {
        status = 200;
    }

    if (empty(data)) {
        return res.status(status).json(responseSchema);
    }

    // ------------------------------------------------------------------ //
    //                        Respuestas predefinidas
    // ------------------------------------------------------------------ //

    if (data === "ERR_VALIDATION_FAILED") {
        var fields = status;
        status = 400;
        data = {
            error: true,
            message: "ERR_VALIDATION_FAILED",
            data: { 'fields': fields },
        }
    } else if (data === "ERR_REGISTY_FOUND") {
        status = 200;
        data = {
            error: true,
            message: "ERR_REGISTRY_FOUND",
        }
    } else if (data === "ERR_MISSING_BEARER_AUTH_TOKEN") {
        status = 401;
        data = {
            error: true,
            message: "ERR_MISSING_BEARER_AUTH_TOKEN",
        }
    } else if (data === "ERR_INVALID_BEARER_AUTH_TOKEN") {
        status = 401;
        data = {
            error: true,
            message: "ERR_INVALID_BEARER_AUTH_TOKEN",
        }
    } else if (data === "ERR_INTERNAL") {
        status = 500;
        data = {
            error: true,
            message: "ERR_INTERNAL",
        }
    } else if (data === "ERR_FAILED") {
        status = 500;
        data = {
            error: true,
            message: "ERR_FAILED",
        }
    } else if (data === "OK") {
        status = 200;
        data = {
            error: false,
            message: "OK",
        }
    } else if (typeof data == "string") {
        data = {
            error: status >= 300,
            message: data
        }
    }

    for (attribute in responseSchema) {
        if (empty(data[attribute])) {
            data[attribute] = responseSchema[attribute];
        }
    }

    return res.status(status).json(data);
}