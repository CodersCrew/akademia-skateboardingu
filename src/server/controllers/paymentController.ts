import {
  getPaymentData,
  PaymentRegistrationType
} from '@/components/functions/payments';
import {
  PAYMENT_API_KEY,
  PAYMENT_MERCHAND_ID,
  PAYMENT_REGISTRATION_ENDPOINT,
  PAYMENT_VERIFICATION_ENDPOINT
} from '@/environment';

export const registerPayment = async ({
  userId,
  transactionId
}: PaymentRegistrationType) => {
  const { user, transaction } = await getPaymentData({ userId, transactionId });

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

export const verifyPayment = async ({}) => {
  const requestBody = {
    merchantId: 123456, // Example merchant ID
    posId: 789012, // Example POS ID
    sessionId: 'abc123def456', // Example session ID
    amount: 10000, // Amount in cents (100 PLN)
    currency: 'PLN',
    orderId: 123456789, // Example order ID
    sign: 'abc123def456' // Example sign
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
