const express = require('express')
const app = express()
const products = require('./database/products.js')
const PORT = process.env.PORT
const HOST = process.env.HOST

app.use(express.static('/public'))

app.listen(PORT, () => {
    console.log('your server work correctly');
    
})

app.get('/products', (req, res) => {
    res.status(200).json({
        data: products,
        count: products.length
    })
})

app.get('/products/:id', (req, res) => {
    console.log(req.params.id);

    const product = products.find((product) => product.id === parseInt(req.params.id))
    console.log(product);
    
    if (!product) {
        return res.status(404).json({
            error: "I can't find it"
        })
        
    }
    return res.status(200).json({
        data: product
    })
})