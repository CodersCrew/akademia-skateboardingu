const mongoose = require('mongoose');

const deliveryMethod = [];

const deliverySchema = new mongoose.Schema({
    method: deliveryMethod,
    description: String,
    price: Number,
});

deliveryModel = mongoose.model('deliveries', deliverySchema);

module.exports = deliveryModel;
