import {
  getTransactionRegistration,
  getTransactionVerification
} from '@/server/controllers/transactionController';
import { getUserData } from '@/server/controllers/userController';

export type PaymentRegistrationType = {
  userId: string;
  transactionId: string;
};

export type PaymentType = {
  userId: string;
  transactionId: string;
};

export const getRegistrationData = async ({
  userId,
  transactionId
}: PaymentType) => {
  if (!userId || !transactionId) {
    throw { message: 'Registration data fetch failed', status: 500 };
  }

  const user = await getUserData(userId);
  const transaction = await getTransactionRegistration(transactionId);

  return { user, transaction };
};

export const getVerificationData = async (transactionId: string) => {
  if (!transactionId) {
    throw { message: 'Veryfication data fetch failed', status: 500 };
  }

  const transaction = await getTransactionVerification(transactionId);

  return { transaction };
};
