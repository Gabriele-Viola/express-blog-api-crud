const express = require('express')
const app = express()
app.use(express.json())
const productsRouter = require('./Routes/productsRouter.js')
const PORT = process.env.PORT
const HOST = process.env.HOST

app.use(express.static('/public'))

app.listen(PORT, () => {
    console.log('your server work correctly');
    
})

app.use('/products', productsRouter)