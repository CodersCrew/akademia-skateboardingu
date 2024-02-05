const mongoose = require('mongoose');
const productModel = require('../models/products');

const createProduct = async (productData) => {
    try {
        const product = new productModel(productData);
        const savedProduct = await product.save();
        console.log('Product saved successfully:', savedProduct);
    } catch (err) {
        throw err;
    } finally {
        mongoose.connection.close();
    }
};

const getAllProducts = async () => {
    try {
        const products = await productModel.find();
        return products;
    } catch (err) {
        throw err;
    } finally {
        mongoose.connection.close();
    }
};

const getProductById = async (productId) => {
    try {
        const product = await productModel.findBy(productId);
        if (!product) {
            return null;
        }
        console.log('Retrieved product by ID:', product);
        return product;
    } catch (err) {
        throw err;
    } finally {
        mongoose.connection.close();
    }
};

const updateProductById = async (productId, updates) => {
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(
            productId,
            updates,
            {
                new: true,
            },
        );
        if (!updatedProduct) {
            return null;
        }
        console.log('Updated product:', updatedProduct);
        return updatedProduct;
    } catch (err) {
        throw err;
    } finally {
        mongoose.connection.close();
    }
};

const deleteProductById = async (productId) => {
    try {
        const deletedProduct = await productModel.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return null;
        }
        console.log('Deleted product:', deletedProduct);
        return deletedProduct;
    } catch (err) {
        throw err;
    } finally {
        mongoose.connection.close();
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
};
