import {
  transactionRegistrationModel,
  transactionVerificationModel
} from '../models/transaction';

export const getTransactionRegistration = async (transactionId: string) => {
  const transaction =
    await transactionRegistrationModel.findById(transactionId);

  if (!transaction) {
    throw { message: 'Failed to get transaction data', status: 500 };
  }

  return { transaction };
};

export const getTransactionVerification = async (transactionId: string) => {
  const transaction =
    await transactionVerificationModel.findById(transactionId);

  if (!transaction) {
    throw { message: 'Failed to get veryfication data', status: 500 };
  }

  return { transaction };
};
