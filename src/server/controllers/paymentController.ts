import {
  PAYMENT_API_KEY,
  PAYMENT_MERCHAND_ID,
  PAYMENT_REGISTRATION_ENDPOINT,
  PAYMENT_VERIFICATION_ENDPOINT
} from '@/environment';
import {
  TransactionNotification,
  TransactionVerificationData
} from '@/models/transaction';
import {
  getRegistrationData,
  getVerificationData,
  PaymentType
} from '@/server/utils/payments';

type TransactionNotification = Omit<TransactionVerificationData, 'sign'>;

export const registerPayment = async ({
  userId,
  transactionId
}: PaymentType) => {
  const { user, transaction } = await getRegistrationData({
    userId,
    transactionId
  });

  const requestBody = {
    merchantId: user.userData.merchantId,
    posId: user.userData.posId,
    sessionId: transaction.transaction.sessionId,
    amount: transaction.transaction.amount,
    currency: transaction.transaction.currency,
    description: transaction.transaction.description,
    email: user.userData.email,
    client: user.userData.client,
    address: user.userData.address,
    zip: user.userData.zip,
    city: user.userData.city,
    country: user.userData.country,
    phone: user.userData.phone,
    language: user.userData.language,
    method: transaction.transaction.method,
    urlReturn: transaction.transaction.urlReturn,
    urlStatus: transaction.transaction.urlStatus
  };

  const response = await fetch(PAYMENT_REGISTRATION_ENDPOINT, {
    body: JSON.stringify(requestBody),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa(`${PAYMENT_MERCHAND_ID}:${PAYMENT_API_KEY}`)}`
    }
  });

  if (!response.ok) {
    throw { message: 'Payment registration failed', status: 500 };
  }

  await response.json();
  return { data: { response }, options: { status: 200 } };
};

export const verifyPayment = async (transactionId: string) => {
  const { transaction } = await getVerificationData(transactionId);

  const requestBody = {
    merchantId: transaction.transaction.merchantId,
    posId: transaction.transaction.posId,
    sessionId: transaction.transaction.sessionId,
    amount: transaction.transaction.amount,
    currency: transaction.transaction.currency,
    orderId: transaction.transaction.orderId,
    sign: transaction.transaction.sign
  };

  const response = await fetch(PAYMENT_VERIFICATION_ENDPOINT, {
    body: JSON.stringify(requestBody),
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa(`${PAYMENT_MERCHAND_ID}:${PAYMENT_API_KEY}`)}`
    }
  });

  if (!response.ok) {
    throw { message: 'Payment veryfication failed', status: 500 };
  }

  await response.json();
  return { data: { response }, options: { status: 200 } };
};

export const savePaymentNotification = async (
  notificationData: TransactionNotification
) => {
  if (!notificationData) {
    throw {
      message: 'Transaction data notification fetch failed.',
      status: 500
    };
  }

  const paymentNotification = new TransactionNotification(notificationData);

  await paymentNotification.save();
};
