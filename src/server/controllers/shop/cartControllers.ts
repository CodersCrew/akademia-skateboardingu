import { Order, orderModel } from '@/server/models/order';
import { NextApiRequest, NextApiResponse } from 'next';

// functions to be revised

export const buyItem = async (data: Order) => {
    try {
        const buyItem = new orderModel(data);
        const boughtItem = await buyItem.save();

        if (boughtItem._id) {
            throw new Error('Failed to buy item.');
        }
        return boughtItem;
    } catch (error) {
        throw error;
    }
};

export const updateItem = async (itemId: string, newData: Partial<Order>) => {
    try {
        const updatedItem = await orderModel.findByIdAndUpdate(
            itemId,
            newData,
            {
                new: true,
                runValidators: true,
            },
        );

        if (!updatedItem) {
            throw new Error('Item not found or failed to update.');
        }

        return updatedItem;
    } catch (error) {
        throw error;
    }
};

export const getCartItems = async () => {
    try {
        const allItems = await orderModel.find();

        if (!allItems) {
            throw new Error('Items not found.');
        }

        return allItems;
    } catch (error) {
        throw error;
    }
};

const getItem = async (itemId: string) => {
    try {
        const item = await orderModel.findById(itemId);

        if (!item) {
            throw new Error('Item not found.');
        }

        return item;
    } catch (error) {
        throw error;
    }
};

const deleteItem = async (itemId: string) => {
    try {
        const deletedItem = await orderModel.findByIdAndDelete(itemId);

        if (!deletedItem) {
            throw new Error('Item not deleted.');
        }

        return deletedItem;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    buyItem,
    updateItem,
    getItem,
    getCartItems,
    deleteItem,
};
