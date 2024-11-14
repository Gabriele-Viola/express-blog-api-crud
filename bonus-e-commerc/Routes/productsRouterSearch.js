const express = require('express')
const productsControllers = require('../Controllers/productsControllers.js')
const products = require('../database/products.js')
const routerSearch = express.Router()

routerSearch.get('/', productsControllers.search)

module.exports = routerSearch