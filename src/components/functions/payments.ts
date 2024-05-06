import { getTransaction } from '@/server/controllers/transactionController';
import { getUserData } from '@/server/controllers/userController';

export type PaymentRegistrationType = {
  userId: string;
  transactionId: string;
};

export const getPaymentData = async ({
  userId,
  transactionId
}: PaymentRegistrationType) => {
  if (!userId || !transactionId) {
    throw { message: 'Data fetch failed', status: 500 };
  }

  const user = await getUserData(userId);
  const transaction = await getTransaction(transactionId);

  return { user, transaction };
};

export const getTransaction = async({});
