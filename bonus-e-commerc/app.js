const express = require('express')
const app = express()
const productsControllers = require('./Controllers/productsControllers.js')
const PORT = process.env.PORT
const HOST = process.env.HOST

app.use(express.static('/public'))

app.listen(PORT, () => {
    console.log('your server work correctly');
    
})

app.get('/products', productsControllers.index)

app.get('/products/:id', productsControllers.show)