const mongoose = require('mongoose');

export interface Item {
    name: string;
    description: string;
    price: number;
    isAvailable: boolean;
    photos: [string];
    category: string;
    priceHistory: [
        {
            date: Date;
            price: number;
        },
    ];
    tags: [string];
}

const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    isAvailable: Boolean,
    photos: [String],
    category: String,
    priceHistory: [
        {
            date: Date,
            price: Number,
        },
    ],
    tags: [String],
});

const itemModel = mongoose.model('Item', itemSchema);

export { itemModel };
