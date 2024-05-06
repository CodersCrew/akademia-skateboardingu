import { DOTPAY_AUTH_TOKEN } from '@/environment';
import { PaymentDotpayData } from '@/models/paymentDotpay';

type DotpayEndpointTypes = Omit<
  PaymentDotpayData,
  'ignore_last_payment_channel'
>;

const returnDotpayEndpoint = ({
  id,
  amount,
  currency,
  description
}: DotpayEndpointTypes) => {
  return `API_ENDPOINT_DOTPAY$/?id=${id}&amount=${amount}.00&currency=${currency}&description=${description}`;
};

export const initiatePayment = async ({
  id,
  amount,
  currency,
  description,
  ignore_last_payment_channel
}: PaymentDotpayData) => {
  const paymentData = {
    id: id,
    amount: amount,
    curreny: currency,
    description: description,
    ignore_last_payment_channel: ignore_last_payment_channel
  };

  const paymentRequestOptions = {
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${DOTPAY_AUTH_TOKEN}`
    },

    body: JSON.stringify(paymentData)
  };

  const response = await fetch(
    returnDotpayEndpoint({ id, amount, currency, description }),
    paymentRequestOptions
  );
  if (!response.ok) {
    throw { message: 'Payment failed', status: 500 };
  }

  return { data: { response }, options: { status: 201 } };
};
