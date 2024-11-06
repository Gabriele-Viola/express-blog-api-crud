const express = require('express')
const aliens = require('./database/aliens.js')
const app = express()
const PORT = process.env.PORT
const HOST = process.env.HOST
aliensRouters= require('./routes/aliens.js')
const aliensController = require('./Controller/AliensController.js')


app.use(express.json())

app.listen(PORT, () => {
    console.log({success: `Your server works at ${HOST}:${PORT}`})
})

app.use('/aliens', aliensRouters)