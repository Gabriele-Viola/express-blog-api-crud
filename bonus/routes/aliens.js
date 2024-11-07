const express = require('express')
const router = express.Router()
const aliensController = require('../Controller/AliensController.js')

router.get('/', aliensController.index)

router.get('/:name', aliensController.show)

router.post('/', aliensController.create)

router.delete('/:name', aliensController.destroy)

module.exports = router