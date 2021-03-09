const sequence = {
    _id: 1,
    get id() { return this._id++ }
} //começa do 1

const products = {}

function saveNewProduct(product) {
    if (!product.id) product.id = sequence.id
    products[product.id] = product
    return product
}

function getProductById(id) {
    return products[id] || { success: false, message: `Product with id ${id} does not exist` }
}

function getProducts() {
    return Object.values(products)
}

module.exports = {
    saveNewProduct,
    getProductById,
    getProducts
}
