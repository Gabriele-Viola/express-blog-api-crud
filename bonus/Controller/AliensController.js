const aliens = require('../database/aliens.js')
const fs = require('fs')
const index = (req, res) => {
    res.status(200).json({ data: aliens, count: aliens.lenght })
}

const show = (req, res) => {
    const alien = aliens.find(alien => alien.name.toLowerCase() === req.params.name)
    if (!alien) {
        return res.status(404).json({
            error: `alien '${req.params.name}' no found`
        })
    }
    res.status(200).json(alien)
}

const create = (req, res) => {
    const newAlien = {
        name: req.body.name,
        planet: req.body.planet,
        species: req.body.species,
        color: req.body.color,
        abilities: req.body.abilities,
        strength: req.body.strength
    }


    const controller = aliens.find(alien => alien.name.toLowerCase() === newAlien.name.toLowerCase())?.name
    
    
    if(controller == undefined){
        aliens.push(newAlien)
        
        fs.writeFileSync('./database/aliens.js', `module.exports = ${JSON.stringify(aliens, null, 4)}`)
        return res.status(200).json({
            mesaage: `Your create successfuly your alien`, 
            data: aliens,
            count: aliens.length
        })
    }
    return res.status(409).json({
        status:409,
        conflict: `alien name: '${controller}' is already in use`
    })



}

const destroy = (req, res) => {

    const controller = aliens.find(alien => alien.name.toLowerCase() === req.params.name.toLowerCase())?.name
    
    console.log(req.params.name);
    console.log('this is controller', controller);
    
    

    if( controller == undefined){
        return res.status(404).json({
            status:'404',
            message:`${req.params.name} no found`
        })
    }

    const newAliens = aliens.filter(alien => alien.name.toLowerCase() !== req.params.name.toLowerCase())
    console.log('this is array', newAliens);
    fs.writeFileSync('./database/aliens.js', `module.exports = ${JSON.stringify(newAliens, null, 4)}`)
    
    return res.status(200).json({
        status: '200',
        message:`You delete ${req.params.name} correctly`,
        list: newAliens
    })
}
module.exports = {
    index,
    show,
    create,
    destroy
}