const express = require('express')

const getProducts = require('./getProducts')

const getProduct = require('./getProduct')

const app = express()

const port = 4444

const products = require('../products.json')


app.get('/api/products', getProducts)

app.get('/api/products/:id', getProduct)





app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

