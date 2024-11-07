const express = require('express')

const app = express()
const PORT = process.env.PORT
const HOST = process.env.HOST
const notFoundMiddleware = require('./middleware/notFoundMiddleware.js')
const logger = require('./middleware/logger.js')
const handleErrors = require('./middleware/handleErrors.js')
const aliensRouters= require('./routes/aliens.js')



app.use(express.json()) // middleware for see the body of the request

app.use('/aliens', logger)

app.listen(PORT, () => {
    console.log({success: `Your server works at ${HOST}:${PORT}`})
})

app.use('/aliens', aliensRouters)

app.use(handleErrors)

app.use(notFoundMiddleware)