import mongoose from 'mongoose';

export type TransactionRegistrationType = {
  sessionId: string;
  amount: number;
  currency: string;
  description: string;
  method: number;
  urlReturn: string;
  urlStatus: string;
};

export type TransactionVerificationType = {
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

const TransactionVerificationSchema = new mongoose.Schema({
  merchantId: Number,
  posId: Number,
  sessionId: String,
  amount: Number,
  currency: String,
  orderId: Number,
  sign: String
});

const transactionRegistrationModel = mongoose.model(
  'transaction',
  transactionRegistrationSchema
);

const transactionVerificationModel = mongoose.model(
  'transaction',
  TransactionVerificationSchema
);

const transactionNotificationModel = mongoose.model(
  'transaction',
  TransactionVerificationSchema
);

export {
  transactionNotificationModel,
  transactionRegistrationModel,
  transactionVerificationModel
};
