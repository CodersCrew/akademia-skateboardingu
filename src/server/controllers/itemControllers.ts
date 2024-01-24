import { NextApiRequest, NextApiResponse } from 'next';

const data = {};

const APP_URL_ITEM = ''

const addItem = async (data) => {
    //databse:
    // const newItem = new itemModel(req, res);
    // const savedItem = await newItem.save();

    if (savedItem.savedSuccessfully()) {
        throw new Error({ code: 400, message: 'Failed to add item' });
    }

    return newItem;
};

const updateItem = async (data) => {
    try {
        const response = await fetch(`APP_URL_ITEM/'id'`, {
            method: METHOD_PUT,
            headers: {
                CONTENT_TYPE_JSON,
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to update item');
        }

        const updatedItem = await response.json();
        return updatedItem;
    } catch (error) {
        throw error;
    }
};

const getAllItems = async () => {
    try {
        const response = await fetch(APP_URL_ITEM, {
            method: METHOD_GET,
        });
        if (!response.ok) {
            throw new Error('Failed to get items');
        }

        const allItems = await response.json();
        return allItems;
    } catch (error) {
        throw error;
    }
};

const getItem = async () => {
    try {
        const response = await fetch(`APP_URL_ITEM/'id'`, {
            method: METHOD_GET,
        });
        if (!response.ok) {
            throw new Error('Failed to get item');
        }

        const item = await response.json();
        return item;
    } catch (error) {
        throw error;
    }
};

const deleteItem = async (data) => {
    try {
        const response = await fetch(`APP_URL_ITEM/'id'`, {
            method: METHOD_DELETE,
        });
        if (!response.ok) {
            throw new Error('Failed to delete item');
        }
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