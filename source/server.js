const express = require('express')
const database = require('./db')
const app = express()
const port = 3003

//* Exemplo de Middleware
// app.get('/products', (req, res, next) => {
//     console.log('Middleware running...')
//     next()
// })

//* Middleware para toda a aplicação
//Toda requisição passa por aqui
// app.use((req, res, next) => {
//     console.log('I am everywhere!')
//     next()
// })
// app.use((req, res, next) => {
//     res.send({ name: 'Notebook', price: 123.45 })
// })

app.get('/products', (req, res, next) => { //!o normal é suprimir o next quando não utilizado
    res.send(database.getProducts())
})

app.get('/products/:id', (req, res, next) => {
    res.send(database.getProductById(req.params.id))
})

app.post('/products', (req, res, next) => {

    const newProduct = database.saveNewProduct({
        name: req.body.name,
        price: req.body.price
    })

    res.send({
        success: true,
        newProduct,
    }) //JSON para a resposta
})


app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
}) //Somente uma aplicação por porta
