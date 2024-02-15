const mongoose = require('mongoose');

export interface Item {
    name: string; //PRODUCT
    description: string; //DESCRIPTION
    added: Date; // ADDED added
    price: number; //PRICE
    quantity: number; // QUANTITY added
    isAvailable: string; // STATUS
    category: string; //CATEGORY
    priceHistory: [
        //PRICE_HISTORY
        {
            date: Date;
            price: number;
        },
    ];
    photos: [string]; //PHOTOS
}

const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    added: Date,
    price: Number,
    quantity: Number,
    isAvailable: String,
    category: String,
    priceHistory: [
        {
            date: Date,
            price: Number,
        },
    ],
    photos: [String],
});

const itemModel = mongoose.model('Item', itemSchema);

export { itemModel };
