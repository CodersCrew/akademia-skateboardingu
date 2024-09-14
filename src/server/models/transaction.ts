import mongoose from 'mongoose';

export type TransactionRegistration = {
  sessionId: string;
  amount: number;
  currency: string;
  description: string;
  method: number;
  urlReturn: string;
  urlStatus: string;
};

export type TransactionVerification = {
  merchantId: number;
  posId: number;
  sessionId: string;
  amount: number;
  currency: string;
  orderId: number;
  sign: string;
};

const transactionRegistrationSchema = new mongoose.Schema({
  sessionId: String,
  amount: Number,
  currency: String,
  description: String,
  method: Number,
  urlReturn: String,
  urlStatus: String
});

const transactionVerificationSchema = new mongoose.Schema({
  merchantId: Number,
  posId: Number,
  sessionId: String,
  amount: Number,
  currency: String,
  orderId: Number,
  sign: String
});

export const transactionRegistrationModel = mongoose.model(
  'transactionRegistration',
  transactionRegistrationSchema
);

export const TransactionVerification = mongoose.model(
  'transactionVerification',
  transactionVerificationSchema
);

export const TransactionNotification = mongoose.model(
  'transactionNotification',
  transactionVerificationSchema
);
