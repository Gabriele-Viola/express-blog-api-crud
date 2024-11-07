const aliens = require('../database/aliens.js')
const fs = require('fs')
const index = (req, res) => {
    res.status(200).json({data: aliens, count: aliens.lenght})
}

const show = (req, res) => {
    const alien = aliens.find (alien => alien.name.toLowerCase() === req.params.name)
    if(!alien){
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
         species: req.body. species,
         color: req.body.color,
         abilities: req.body.abilities,
         strength: req.body.strength
        }
        
        
        // const controller = aliens.find( alien => alien.name.toLowerCase() === newAlien.name)
        aliens.forEach((alien) =>{
            console.log(alien.name);
            
        })
        const finder = aliens.find( (alien) => {
            alien.name.toLocaleLowerCase() === newAlien.name
        })
        console.log(finder);
   
        
        console.log(req.body.name);
   
        
        
        
        // console.log(newAlien.name);
        // console.log(controller);
        
        // if(!controller){
        //     return res.status(409).json({
        //         status:409,
        //         conflict: `alien name: '${req.params.name}' is already in use`
        //     })
        // }
    
    // aliens.push(newAlien)

    // fs.writeFileSync('./database/aliens.js', `module.exports = ${JSON.stringify(aliens, null, 4)}`)
    
    res.status(200).json({
        data: aliens,
        count: aliens.length
    })
    
    }
module.exports = {
    index,
    show,
    create
}