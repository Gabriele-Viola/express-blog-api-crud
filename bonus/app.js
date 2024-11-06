const express = require('express')
const aliens = require('./database/aliens.js')
const app = express()
const PORT = process.env.PORT
const HOST = process.env.HOST


app.use(express.json())

app.listen(PORT, () => {
    console.log({success: `Your server works at ${HOST}:${PORT}`})
})

app.get('/aliens', (req, res) => {
    res.status(200).json({data: aliens, count: aliens.lenght})
})

app.get('/aliens/:name', (req, res) => {
   const alien = aliens.find (alien => alien.name.toLowerCase() === req.params.name)
    res.status(404).json(alien)    
})