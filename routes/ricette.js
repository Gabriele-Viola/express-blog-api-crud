const express = require('express')
const router = express.Router()
const RicetteController = require('../Controllers/RicetteController.js')


router.get('/', RicetteController.index)

router.get('/:slug', RicetteController.show)

router.post('/', RicetteController.store )


module.exports = router