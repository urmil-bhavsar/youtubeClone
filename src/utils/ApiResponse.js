class ApiResponse {
    constructor(statusCode, data, message =
        "Success"
    ) {
        this.statusCode = statusCode
        this.data = data
        this.message = message
        // response status codes must be less than 400 
        this.success = statusCode < 400
    }
}