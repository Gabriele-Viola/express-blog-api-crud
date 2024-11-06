const express = require('express')
const app = express()
const PORT = process.env.PORT
const HOST = process.env.HOST

app.use(express.json())

app.listen(PORT, () => {
    console.log({success: `Your server works at ${HOST}:${PORT}`})
})

