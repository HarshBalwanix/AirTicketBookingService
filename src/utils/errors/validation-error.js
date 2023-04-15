const {StatusCodes} =require('http-status-codes');
const { ValidationError } = require('sequelize');
class validationError extends Error {
    construtor(error){
        super();
        let explanation=[];
        error.errors.forEach((err)=>{
            explanation.push(err.message);
        })
        this.name='ValidationError';
        this.message="Not able to validate the data sent in the request";
        this.explanation=explanation;
        this.statusCode=StatusCodes.BAD_REQUEST
    }
} 

module.exports =ValidationError;