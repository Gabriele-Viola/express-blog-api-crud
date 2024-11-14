const { count } = require("console");
const products = require("../database/products.js");
const fs = require('fs')
const index = (req, res) => {
    res.status(200).json({
        data: products,
        count: products.length
    })
}

const show = (req, res) => {
    console.log(req.params.id);


    const product = products.find((product) => product.id === parseInt(req.params.id))

    if (!product) {
        return res.status(404).json({
            error: "I can't find it"
        })

    }
    return res.status(200).json({
        data: product
    })
}

const search = (req, res) => {
    console.log(req.query.amount);
    const { id, name, amount, description, price } = req.query

    console.log(name, amount, price);

    return res.status(200).json({
        name: req.query.name,
        amount: req.query.amount,
        price: req.query.price
    })

}

const store = (req, res) => {

    const newProduct = {
        id: Number(products[products.length - 1].id + 1),
        name: req.body.name,
        amoun: parseInt(req.body.amount),
        description: req.body.description,
        price: parseFloat(req.body.price)
    }

    products.push(newProduct)

    fs.writeFileSync('./database/products.js', `module.exports = ${JSON.stringify(products, null, 4)}`)

    res.status(201).json({
        message: `you add correctly ${newProduct.name}`,
        data: products
    })
}

const update = (req, res) => {

    const productUpdate = products.find(product => product.name.replace(/\s/g, '').toLowerCase() === req.params.name)

    console.log(productUpdate);


    if (!productUpdate) {
        return res.status(404).json({
            error: `I can't found ${req.params.name}`
        })
    }

    productUpdate.amount = req.body.amount
    productUpdate.description = req.body.description
    productUpdate.price = req.body.price


    fs.writeFileSync('./database/products.js', `module.exports = ${JSON.stringify(products, null, 4)}`)

    return res.status(201).json({
        message: ` You update correctly ${productUpdate}`,
        data: products
    })
}

const destroy = (req, res) => {

    const productToDelete = products.find(product => product.name.replace(/\s+/g, '').toLowerCase() === req.params.name)


    if (!productToDelete) {
        return res.status(404).json({
            error: `no ${req.params.name} found to delete`
        })
    }
    const newList = products.filter(product => product.id !== productToDelete.id)

    fs.writeFileSync('./database/products.js', `module.exports = ${JSON.stringify(newList, null, 4)}`)

    return res.status(201).json({
        message: `You delete ${productToDelete.name} correctly`,
        data: newList,
        count: newList.length
    })
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
    search
}

