const express = require('express')
const productsControllers = require('../Controllers/productsControllers.js')
const products = require('../database/products.js')
const router = express.Router()

router.get('/', productsControllers.index)

router.get('/:id', productsControllers.show)

router.post('/', productsControllers.store)

router.put('/:name', productsControllers.update)

router.delete('/:name', productsControllers.destroy)


module.exports = router