const ricette = require('../database/db.js')

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
// const showFilterTags = (req, res) =>{
//     console.log(req.params.tags);
    
//     // const filterTags = ricette.filter( (ricetta) => ricetta.tags === req.params.tags)
//     // res.json({
//     //     tags: 
//     // })
// }

module.exports = {
    index,
    show
}






