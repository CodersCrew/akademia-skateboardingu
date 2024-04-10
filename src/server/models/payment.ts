import mongoose from 'mongoose';

export type PaymentData = {
  api_version: string;
  id: number;
  amount: string;
  currency: string;
  description: string;
  chk: string;
  ignore_last_payment_channel: number;
  url: string;
  type: number;
  bylaw: number;
  lang: string;
  personal_data: number;
  first_name: string;
  last_name: string;
  email: string;
  customer: string;
  deladdr: string;
};

const paymentSchema = new mongoose.Schema({
  api_version: String,
  id: Number,
  amount: String,
  currency: String,
  description: String,
  chk: String,
  ignore_last_payment_channel: Number,
  url: String,
  type: Number,
  bylaw: Number,
  lang: String,
  personal_data: Number,
  first_name: String,
  last_name: String,
  email: String,
  customer: String,
  deladdr: String
});

const paymentModel = mongoose.model('payment', paymentSchema);

export { paymentModel };
