const mongoose = require('mongoose');

interface PriceHistory {
    date: Date;
    price: number;
}

export interface Item {
    name: string;
    description: string;
    price: number;
    quantity: number;
    visible: string;
    category: string;
    priceHistory: PriceHistory[];
    photos: [string];
}

const PriceHistorySchema = new mongoose.Schema({
    date: Date,
    price: Number,
});

const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    visible: String,
    category: String,
    priceHistory: [PriceHistorySchema],
    photos: [String],
});

const itemModel = mongoose.model('Item', itemSchema);

export { itemModel };
