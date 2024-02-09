import { Item, itemModel } from '@/server/models/item';

export const addItem = async (data: Item) => {
    try {
        const newItem = new itemModel(data);
        const savedItem = await newItem.save();

        if (!savedItem._id) {
            throw { message: 'Failed to add item', status: 500 };
        }
        return savedItem;
    } catch (error) {
        throw error;
    }
};

export const updateItem = async (itemId: string, newData: Partial<Item>) => {
    try {
        const updatedItem = await itemModel.findByIdAndUpdate(itemId, newData, {
            new: true,
            runValidators: true,
        });

        if (!updatedItem._id) {
            throw { message: 'Failed to update item', status: 500 };
        }

        return updatedItem;
    } catch (error) {
        throw error;
    }
};

export const getAllItems = async () => {
    try {
        const allItems = await itemModel.find();

        if (!allItems) {
            throw { message: 'Failed to get items', status: 500 };
        }

        return allItems;
    } catch (error) {
        throw error;
    }
};

export const getItem = async (itemId: string) => {
    try {
        const item = await itemModel.findByIt(itemId);

        if (!item._id) {
            throw { message: 'Failed to get item', status: 500 };
        }

        return item;
    } catch (error) {
        throw error;
    }
};

export const deleteItem = async (itemId: string) => {
    try {
        const deletedItem = await itemModel.findByIdAndDelete(itemId);

        if (!deletedItem._id) {
            throw { message: 'Failed to delete item', status: 500 };
        }

        return deletedItem;
    } catch (error) {
        throw error;
    }
};
