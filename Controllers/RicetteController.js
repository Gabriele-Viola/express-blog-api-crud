const { title } = require('process');
const ricette = require('../database/db.js')
const fs = require('fs')

const index = (req, res) => {
    let list = ''
    ricette.forEach(ricetta => {
        list += `<li>${ricetta.title}</li>`
    });
    const unorderlist = `<ul>${list}</ul>`
    res.send(unorderlist)
    // res.json({
    //     data: ricette,
    //     counter: ricette.lenght
    // })
}

const show = (req, res) =>{

    console.log(req.params);
    
    
    
    const ricetta = ricette.find( (ricetta) => ricetta.slug === req.params.slug)
    console.log(ricetta);
    
    if(!ricetta){
        return res.status(404).json({error: "Nessuna ricetta trovata"})
    }
    return res.status(200).json({ data: ricetta })
}

const store = (req, res) => {
    const ricetta = {
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }
    ricette.push(ricetta)

    fs.writeFileSync('./database/db.js', `module.exports = ${JSON.stringify(ricette, null, 4)}`)
    return res.status(201).json({
        status: 201,
        data: ricette,
        count: ricette.length
    })
}

// const showFilterTags = (req, res) =>{
//     console.log(req.params.tags);
    
//     // const filterTags = ricette.filter( (ricetta) => ricetta.tags === req.params.tags)
//     // res.json({
//     //     tags: 
//     // })
// }

module.exports = {
    index,
    show,
    store
}






