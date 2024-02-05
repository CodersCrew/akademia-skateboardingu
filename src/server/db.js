const cors = require('cors');
const mongoose = require('mongoose');
const productModel = require('./models/products');
const run = require('./config/databaseConfig');
const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
} = require('./controllers/productController');

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_HOST}`;

mongoose.connect(uri);

const sampleProduct = {
    name: 'board1',
    description: 'board',
    price: 300,
    isAvailable: true,
    photos: ['photo1', 'photo2'],
    category: 'boards',
    priceHistory: [
        {
            date: new Date('2024-01-16'),
            price: 300,
        },
        { date: new Date('2024-01-17'), price: 300 },
    ],
    tags: ['board', 'new'],
};

run();
createProduct(sampleProduct);
deleteProductById('65a6e2e46722b29b59e2686c');
