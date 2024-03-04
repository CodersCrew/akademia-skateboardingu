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
