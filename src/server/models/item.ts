import mongoose from 'mongoose';

export type PriceHistory = {
  date: Date;
  price: number;
};

export type Item = {
  _id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  visible: boolean;
  category: string;
  priceHistory?: PriceHistory[];
  photos: string[];
};

const priceHistorySchema = new mongoose.Schema({
  date: Date,
  price: Number
});

const schema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  visible: Boolean,
  category: String,
  priceHistory: [priceHistorySchema],
  photos: [String]
});

export const itemModel = mongoose.model('items', schema);
