class AppError extends Error {
    constructor(
        name,
        message,
        explanation,
        statusCode
    ){
        super();
        this.name=name;
        this.message=message;
        this.explanataion=explanation;
        this.statusCode=statusCode;
    }
}

module.exports= AppError;