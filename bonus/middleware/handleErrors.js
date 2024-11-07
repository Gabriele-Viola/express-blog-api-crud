const handleErrors = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        message: "Somthing went wrong",
        error: err.message
    })
    
}
module.exports = handleErrors