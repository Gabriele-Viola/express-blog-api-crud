/*
Esercizio
Usando l'array dei post fornito con le relative immagini, creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.
Tutte le risposte saranno in json.
All'interno creare le seguenti rotte:
/ - index: ritornerà un html con una ul che stamperà la lista dei post
/:slug - show: tramite il parametro dinamico che rappresenta lo slug del post, ritornerà un json con i dati del post
Scrivere tutte le funzioni delle rotte nel controller dedicato
Registrare il router dentro app.js con il prefisso posts/.
Bonus
Creare inoltre un filtro in querystring per tag, che ritorna in formato json tutti i post che hanno quei tag
Aggiungi il metodo store per la creazione di un nuovo post
*/

const express = require('express')
const app = express()
const ricetteRouters = require('./routes/ricette.js')

const ricette = require('./database/db.js')

const PORT = 3000
const HOST = 'http://localhost'

app.listen(PORT, () => {

    console.log(`${HOST}:${PORT}`);

})
 app.use('/', ricetteRouters)


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

