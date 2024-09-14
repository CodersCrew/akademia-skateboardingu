import mongoose from 'mongoose';

export type UserType = {
  merchantId: number;
  posId: number;
  sessionId: string;
  amount: number;
  currency: string;
  description: string;
  email: string;
  client: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  phone: string;
  language: string;
  method: number;
  urlReturn: string;
  urlStatus: string;
};

const UserSchema = new mongoose.Schema({
  merchantId: Number,
  posId: Number,
  sessionId: String,
  amount: Number,
  currency: String,
  description: String,
  email: String,
  client: String,
  address: String,
  zip: String,
  city: String,
  country: String,
  phone: String,
  language: String,
  method: Number,
  urlReturn: String,
  urlStatus: String
});

export const User = mongoose.model('user', UserSchema);
