// MongoDB
export const MONGODB_HOST = process.env.MONGODB_HOST as string;
export const MONGODB_PASS = process.env.MONGODB_PASS as string;
export const MONGODB_USER = process.env.MONGODB_USER as string;

// Sendgrid
export const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY as string;
export const SENDGRID_FROM = process.env.SENDGRID_FROM as string;
export const SENDGRID_ORDER_CONFIRMATION_TEMPLATE = process.env
  .SENDGRID_ORDER_CONFIRMATION_TEMPLATE as string;
export const SENGDGRID_SUBSCRIPTION_TEMPLATE = process.env
  .SENDGRID_SUBSCRIPTION_TEMPLATE as string;
export const SENDGRID_CONTACT_TEMPLATE = process.env
  .SENDGRID_CONTACT_TEMPLATE as string;

// ImgBB
export const IMGBB_API_KEY = process.env.IMGBB_API_KEY as string;
export const IMGBB_UPLOAD_URL = 'https://api.imgbb.com/1/upload' as string;

// Payment
export const PAYMENT_REGISTRATION_ENDPOINT =
  'https://secure.przelewy24.pl/api/v1/transaction/register';
export const PAYMENT_VERIFICATION_ENDPOINT =
  'https://secure.przelewy24.pl/api/v1/transaction/verify';
export const PAYMENT_MERCHAND_ID = process.env.PAYMENT_MERCHAND_ID as string;
export const PAYMENT_API_KEY = process.env.PAYMENT_API_KEY as string;
