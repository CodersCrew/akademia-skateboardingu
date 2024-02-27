import sgMail from '@sendgrid/mail';

import {
  SENDGRID_API_KEY,
  SENDGRID_FROM,
  SENDGRID_ORDER_CONFIRMATION_TEMPLATE,
  SENGDGRID_SUBSCRIPTION_TEMPLATE
} from '@/environment';

const templates = {
  orderConfirmation: SENDGRID_ORDER_CONFIRMATION_TEMPLATE,
  subscription: SENGDGRID_SUBSCRIPTION_TEMPLATE
};

type Email = {
  to: string;
};

type OrderEmail = {
  type: 'orderConfirmation';
  data: {
    first_name: string;
    last_name: string;
    street_name: string;
    street_number: number;
    city: string;
    zip_code: string;
    phone_number: string;
    order_number: string;
    subtotal: string;
    shipping: string;
    total: string;
    products: any;
  };
};

type SubscriptionEmail = {
  type: 'subscription';
  data: {
    product_name: string;
  };
};

export type EmailData = Email & (OrderEmail | SubscriptionEmail);

export const emailService = {
  sendEmail: async ({ to, type, data }: EmailData) => {
    sgMail.setApiKey(SENDGRID_API_KEY);

    const msg = {
      to,
      from: SENDGRID_FROM,
      templateId: templates[type],
      dynamic_template_data: data
    };

    return await sgMail.send(msg);
  }
};
