const {constants} = require("../constants");
const errorHandler= (err,req,res,next)=> {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
                title:"validation failed",
                message:err.message,
                stackTrace:err.stack,
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                itle:"Not found",
                message:err.message,
                stackTrace:err.stack,
            });
        case constants.UNAUTHERIZED:
            res.json({
                title:"Unauthorized",
                message:err.message,
                stackTrace:err.stack,
            });
        case constants.FORBIDDEN:
            res.json({
                title:"forbidden",
                message:err.message,
                stackTrace:err.stack,
            });
        case constants.SERVER_ERROR:
            res.json({
                title:"server error",
                message:err.message,
                tackTrace:err.stack,
                });
        default:
            console.log("no error,all good! ");
            break;
    }
   
};

module.exports= errorHandler;
