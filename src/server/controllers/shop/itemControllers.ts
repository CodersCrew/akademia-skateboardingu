import { Item, itemModel } from '@/server/models/item';
import { NextApiRequest, NextApiResponse } from 'next';

const data = {};

const addItem = async (data: Item) => {
    try {
        const newItem = new itemModel(data);
        const savedItem = await newItem.save();

        if (!savedItem._id) {
            throw new Error('Failed to add item');
        }
        return savedItem;
    } catch (error) {
        throw error;
    }
};

const updateItem = async (itemId: string, newData: Partial<Item>) => {
    try {
        const updatedItem = await itemModel.findByIdAndUpdate(itemId, newData, {
            new: true,
            runValidators: true,
        });

        if (!updatedItem._id) {
            throw new Error('Item not found or failed to update');
        }

        return updatedItem;
    } catch (error) {
        throw error;
    }
};

const getAllItems = async () => {
    try {
        const allItems = await itemModel.find();

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
        const item = await itemModel.findByIt(itemId);

        if (!item._id) {
            throw new Error('Item not found.');
        }

        return item;
    } catch (error) {
        throw error;
    }
};

const deleteItem = async (itemId: string) => {
    try {
        const deletedItem = await itemModel.findByIdAndDelete(itemId);

        if (!deletedItem._id) {
            throw new Error('Item not deleted.');
        }

        return deletedItem;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    addItem,
    updateItem,
    getAllItems,
    getItem,
    deleteItem,
};
