const express = require('express')
const app = express()
const loggerMiddleware = require('./middlewares/loggerMiddleware.js')
const notFoundMiddleware = require('./middlewares/notFound.js')
const ricetteRouters = require('./routes/ricette.js')

const ricette = require('./database/db.js')

const PORT = process.env.PORT
const HOST = process.env.HOST

app.use(express.json())

app.listen(PORT, () => {

    console.log(`${HOST}:${PORT}`);
})
app.use('/ricette', (req, res, next)=> {
    throw new Error("you broke everything dude!")
})

app.use('/ricette', loggerMiddleware)

app.use('/ricette', ricetteRouters)

app.use('/', (req, res) => {
    res.status(200).send('<h1>Le ricette</h1>')
})

app.use(notFoundMiddleware)

//  app.get('/filtra/:tags',(req, res) =>{

//     const ricetteTags = ricette.filter( ricetta => ricetta.tags.includes(req.params.tags) )
//     if (!ricetteTags) {
//         return res.status(404).json({error: 'nessun tags presente'})        
//     }
//     return res.status(200).json({ tags : ricetteTags})
    
// })
 