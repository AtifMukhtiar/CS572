class Response {
    constructor() {
        this.status = undefined;
        this.description = undefined;
        this.data = {}
    }

    getResponse(status, description, data) {
        this.status = status;
        this.description = description;
        this.data = data;
    }
}

module.exports = Response;