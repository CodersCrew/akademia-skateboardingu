import mongoose from 'mongoose';

const OrderStatus: any = [];
const PaymentMethod: any = [];

export interface Order {
    prodcuts: [
        {
            productId: mongoose.Types.ObjectId;
            quantity: Number;
            commentMagicLink: String;
        },
    ];
    date: Date;
    totalPrice: Number;
    status: [string];
    delivery: mongoose.Types.ObjectId;
    paymentMethod: [string];
}

const orderSchema = new mongoose.Schema({
    prodcuts: [
        {
            productId: mongoose.Types.ObjectId,
            quantity: Number,
            commentMagicLink: String,
        },
    ],
    date: Date,
    totalPrice: Number,
    status: OrderStatus,
    delivery: mongoose.Types.ObjectId,
    paymentMethod: PaymentMethod,
});

export const orderModel = mongoose.model('comments', orderSchema);
