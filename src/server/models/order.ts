import mongoose from 'mongoose';

export enum OrderStatus {
  Pending = 'Pending',
  Shipped = 'Shipped',
  Delivered = 'Delivered',
  Cancelled = 'Cancelled'
}

export enum PaymentMethod {
  CreditCard = 'CreditCard',
  PayPal = 'PayPal',
  CashOnDelivery = 'CashOnDelivery'
}

export type Order = {
  products: [
    {
      productId: mongoose.Types.ObjectId;
      quantity: number;
      commentMagicLink: string;
    }
  ];
  date: Date;
  totalPrice: number;
  status: OrderStatus;
  delivery: mongoose.Types.ObjectId;
  paymentMethod: PaymentMethod;
};

const orderSchema = new mongoose.Schema({
  products: [
    {
      productId: mongoose.Types.ObjectId,
      quantity: Number,
      commentMagicLink: String
    }
  ],
  date: Date,
  totalPrice: Number,
  status: { type: String, enum: Object.values(OrderStatus) },
  delivery: mongoose.Types.ObjectId,
  paymentMethod: { type: String, enum: Object.values(PaymentMethod) }
});

export const orderModel = mongoose.model('orders', orderSchema);
