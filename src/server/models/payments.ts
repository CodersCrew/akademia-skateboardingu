import mongoose from 'mongoose';

export type PaymentRegistration = {
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
  language: string; // pl
  method: number;
  urlReturn: string;
  urlStatus: string;
  timeLimit: number;
  channel: number; //2
  waitForResult: boolean; // true
  regulationAccept: boolean; // false
  shipping: number;
  transferLabel: string;
  mobileLib: number;
  sdkVersion: string;
  sign: string;
  encoding: string;
  methodRefId: string;
  cart: [{}];
  additional: {
    shipping: {};
  };
};

const paymentRegistrationSchema = new mongoose.Schema({
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
  urlStatus: String,
  timeLimit: Number,
  channel: Number,
  waitForResult: Boolean,
  regulationAccept: Boolean,
  shipping: Number,
  transferLabel: String,
  mobileLib: Number,
  sdkVersion: String,
  sign: String,
  encoding: String,
  methodRefId: String,
  cart: [{}],
  additional: {
    shipping: {}
  }
});

export type PaymentVerification = {
  merchantId: number;
  posId: number;
  sessionId: string;
  amount: number;
  currency: string;
  orderId: string;
  sign: string;
};

const PaymentVeryficationSchema = new mongoose.Schema({
  merchantId: Number,
  posId: Number,
  sessionId: String,
  amount: Number,
  currency: String,
  orderId: String,
  sign: String
});

export const PaymentRegistration = mongoose.model(
  'paymentRegistration',
  paymentRegistrationSchema
);

export const PaymentVerification = mongoose.model(
  'paymentVeryfication',
  PaymentVeryficationSchema
);
