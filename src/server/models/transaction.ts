import mongoose from 'mongoose';

export type TransactionRegistrationData = {
  sessionId: string;
  amount: number;
  currency: string;
  description: string;
  method: number;
  urlReturn: string;
  urlStatus: string;
};

export type TransactionVerificationData = {
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

export const TransactionRegistration = mongoose.model(
  'transactionRegistrations',
  transactionRegistrationSchema
);

export const TransactionVerification = mongoose.model(
  'transactionVerifications',
  transactionVerificationSchema
);

export const TransactionNotification = mongoose.model(
  'transactionNotifications',
  transactionVerificationSchema
);
