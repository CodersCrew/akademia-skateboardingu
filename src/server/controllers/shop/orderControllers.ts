import { Order, orderModel } from '@/server/models/order';

const createOrder = async (orderData: Order) => {
    try {
        const newOrder = new orderModel(orderData);
        await newOrder.save();
    } catch (err) {
        throw err;
    } finally {
        mongoose.connection.close();
    }
};

const getAllOrders = async () => {
    try {
        const orders = await orderModel.find();
        return orders;
    } catch (err) {
        throw err;
    } finally {
        mongoose.connection.close();
    }
};

const getOrderById = async (orderId: string) => {
    try {
        const order = await orderModel.findById(orderId);
        if (!order) {
            return null;
        }
        return order;
    } catch (err) {
        throw err;
    } finally {
        mongoose.connection.close();
    }
};

const updateOrdertById = async (orderId: string, updates: Partial<Order>) => {
    try {
        const updatedOrder = await orderModel.findByIdAndUpdate(
            orderId,
            updates,
            {
                new: true,
            },
        );

        if (!updatedOrder) {
            return null;
        }
        return updatedOrder;
    } catch (err) {
        throw err;
    } finally {
        mongoose.connection.close();
    }
};

const deleteOrderById = async (orderId: string) => {
    try {
        const deletedOrder = await orderModel.findByIdAndDelete(orderId);

        if (!deletedOrder) {
            return null;
        }
        return deletedOrder;
    } catch (err) {
        throw err;
    } finally {
        mongoose.connection.close();
    }
};

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrdertById,
    deleteOrderById,
};
