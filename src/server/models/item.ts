import mongoose from 'mongoose';

export type PriceHistory = {
  date: Date;
  price: number;
};

export type Item = {
  name: string;
  description: string;
  price: number;
  quantity: number;
  visible: boolean;
  category: string;
  priceHistory: PriceHistory[];
  photos: string[];
};

const PriceHistorySchema = new mongoose.Schema({
  date: Date,
  price: Number
});

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  visible: Boolean,
  category: String,
  priceHistory: [PriceHistorySchema],
  photos: [String]
});

const itemModel = mongoose.model('items', itemSchema);

export { itemModel };
