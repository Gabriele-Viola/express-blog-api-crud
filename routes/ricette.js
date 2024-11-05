const express = require('express')
const router = express.Router()
const RicetteController = require('../Controllers/RicetteController.js')


router.get('/ricette', RicetteController.index)

router.get('/ricette/:slug', RicetteController.show)


module.exports = router