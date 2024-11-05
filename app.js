const express = require('express')
const app = express()
const ricetteRouters = require('./routes/ricette.js')

const ricette = require('./database/db.js')

const PORT = process.env.PORT
const HOST = process.env.HOST

app.use(express.json())

app.listen(PORT, () => {

    console.log(`${HOST}:${PORT}`);

})
 app.use('/ricette', ricetteRouters)


 app.get('/filtra/:tags',(req, res) =>{

    const ricetteTags = ricette.filter( ricetta => ricetta.tags.includes(req.params.tags) )
    if (!ricetteTags) {
        return res.status(404).json({error: 'nessun tags presente'})        
    }
    return res.status(200).json({ tags : ricetteTags})
    
})
    // const filterTags = ricette.filter( (ricetta) => ricetta.tags === req.params.tags)
    // res.json({
    //     tags: 
    // })

