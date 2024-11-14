const express = require('express')
const app = express()
app.use(express.json())

const productsRouter = require('./Routes/productsRouter.js')
const productSearch = require('./Routes/productsRouterSearch.js')
const PORT = process.env.PORT
const HOST = process.env.HOST

app.use(express.static('/public'))

app.listen(PORT, () => {
    console.log('your server work correctly');

})

app.use('/products', productsRouter)
app.use('/search', productSearch)

// app.get('/search', (req, res) => {
//     const searchTerm = req.query.term;  // Ottiene il parametro "term" dalla query
//     const sortBy = req.query.sort;      // Ottiene il parametro "sort" dalla query

//     res.send(`Stai cercando: ${searchTerm} e ordinando per: ${sortBy}`);
// });