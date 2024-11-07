const notFoundMiddleware = (req, res, next) => {
    res.status(404).send("Ops what are you finding isn't here")
}

module.exports = notFoundMiddleware