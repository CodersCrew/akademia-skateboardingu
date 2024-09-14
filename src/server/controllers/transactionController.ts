import {
  TransactionRegistration,
  TransactionVerification
} from '@/models/transaction';

export const getTransactionRegistration = async (transactionId: string) => {
  const transaction = await TransactionRegistration.findById(transactionId);

  if (!transaction) {
    throw { message: 'Failed to get transaction data', status: 500 };
  }

  return { transaction };
};

export const getTransactionVerification = async (transactionId: string) => {
  const transaction = await TransactionVerification.findById(transactionId);

  if (!transaction) {
    throw { message: 'Failed to get veryfication data', status: 500 };
  }

  return { transaction };
};
