import { transactionRegistrationModel } from '../models/transaction';

export const getTransaction = async (transactionId: string) => {
  const transaction =
    await transactionRegistrationModel.findById(transactionId);

  if (!transaction) {
    throw { message: 'Failed to get user data', status: 500 };
  }

  return { transaction };
};
