const aliens = require('../database/aliens.js')
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

module.exports = {
    index,
    show
}