// overriding the Error class provided by node.js and making changes to it
class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""

    ) {
        super(message)
        // overwriding the statusCode in constructor with my statusCode
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if (statck) {
            this.stack = statck
        } else {
            // passing the reference of stack in the error
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }