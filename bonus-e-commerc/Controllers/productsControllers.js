const products = require("../database/products.js");

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

module.exports = {
    index, 
    show
}

