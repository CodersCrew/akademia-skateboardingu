import mongoose from 'mongoose';

export type PaymentClient = {
  api_version: string;
  id: number;
  amount: string;
  currency: string;
  description: string;
  chk: string;
  channel: number;
  ch_lock: number;
  ignore_last_payment_channel: number;
  channel_groups: string;
  url: string;
  type: number;
  buttontext: number;
  bylaw: number;
  personal_data: number;
  urlc: String;
  expiration_date: string;
  control: string;
  first_name: string;
  last_name: string;
  email: string;
  street: string;
  street_n1: string;
  street_n2: string;
  state: string;
  addr3: string;
  city: string;
  postcode: string;
  phone: string;
  country: string;
  lang: string;
  customer: string;
  deladdr: string;
  p_info: string;
  p_email: string;
  pid: string;
  blik_code: string;
  gp_token: string;
  ap_token: string;
};

const paymentClientSchema = new mongoose.Schema({
  api_version: String,
  id: Number,
  amount: String,
  currency: String,
  description: String,
  chk: String,
  channel: Number,
  ch_lock: Number,
  ignore_last_payment_channel: Number,
  channel_groups: String,
  url: String,
  type: Number,
  buttontext: Number,
  bylaw: Number,
  personal_data: Number,
  urlc: String,
  expiration_date: String,
  control: String,
  first_name: String,
  last_name: String,
  email: String,
  street: String,
  street_n1: String,
  street_n2: String,
  state: String,
  addr3: String,
  city: String,
  postcode: String,
  phone: String,
  country: String,
  lang: String,
  customer: String,
  deladdr: String,
  p_info: String,
  p_email: String,
  pid: String,
  blik_code: String,
  gp_token: String,
  ap_token: String
});

export const PaymentClient = mongoose.model(
  'paymentClient',
  paymentClientSchema
);
