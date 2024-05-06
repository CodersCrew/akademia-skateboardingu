import mongoose from 'mongoose';

// export type PaymentDotpayData = {
//   id: number;
//   operation_number: string;
//   operation_type: string;
//   operation_status: string;
//   operation_amount: string;
//   operation_currency: string;
//   operation_withdrawal_amount: string;
//   operation_commission_amount: string;
//   is_completed: boolean;
//   operation_original_amount: string;
//   operation_original_currency: string;
//   operation_datetime: Date; ///YYYY-MM-DD hh:mm:ss
//   operation_related_number: string;
//   control: string;
//   description: string;
//   email: string;
//   p_info: string;
//   p_email: string;
//   credit_card_issuer_identification_number?: number;
//   credit_card_masked_number?: string;
//   credit_card_expiration_year?: number;
//   credit_card_expiration_month?: number;
//   credit_card_brand_codename?: string;
//   credit_card_brand_code?: string;
//   credit_card_unique_identifier?: string;
//   credit_card_id?: string;
//   channel: number;
//   channel_country?: string;
//   geoip_country?: string;
//   payer_bank_account_name?: string;
//   payer_bank_account?: string;
//   payer_transfer_title?: string;
//   blik_voucher_pin?: number;
//   blik_voucher_amount?: number;
//   blik_voucher_amount_used?: number;
//   channel_reference_id?: string;
//   operation_seller_code?: string;
//   signature: string;
// };

// const paymentDotpaySchema = new mongoose.Schema({
//   id: Number,
//   operation_number: String,
//   operation_type: String,
//   operation_status: String,
//   operation_amount: String,
//   operation_currency: String,
//   operation_withdrawal_amount: String,
//   operation_commission_amount: String,
//   is_completed: Boolean,
//   operation_original_amount: String,
//   operation_original_currency: String,
//   operation_datetime: Date, ///YYYY-MM-DD hh:mm:ss
//   operation_related_number: String,
//   control: String,
//   description: String,
//   email: String,
//   p_info: String,
//   p_email: String,
//   credit_card_issuer_identification_number: Number,
//   credit_card_masked_number: String,
//   credit_card_expiration_year: Number,
//   credit_card_expiration_month: Number,
//   credit_card_brand_codename: String,
//   credit_card_brand_code: String,
//   credit_card_unique_identifier: String,
//   credit_card_id: String,
//   channel: Number,
//   channel_country: String,
//   geoip_country: String,
//   payer_bank_account_name: String,
//   payer_bank_account: String,
//   payer_transfer_title: String,
//   blik_voucher_pin: Number,
//   blik_voucher_amount: Number,
//   blik_voucher_amount_used: Number,
//   channel_reference_id: String,
//   operation_seller_code: String,
//   signature: String
// });

export type PaymentDotpayData = {
  id: number;
  amount: number;
  currency: string;
  description: string;
  ignore_last_payment_channel: boolean;
};

const paymentDotpaySchema = new mongoose.Schema({
  id: Number,
  amount: Number,
  currency: String,
  description: String,
  ignore_last_payment_channel: Boolean
});

const paymentDotpayModel = mongoose.model('payment', paymentDotpaySchema);

export { paymentDotpayModel };
