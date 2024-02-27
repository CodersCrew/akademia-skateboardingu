import { Item, itemModel } from '@/server/models/item';

export const addItem = async (data: Item) => {
  const newItem = new itemModel(data);
  const item = await newItem.save();

  if (!item._id) {
    throw { message: 'Failed to add item', status: 500 };
  }
  return { data: { item }, options: { status: 201 } };
};

export const updateItem = async (itemId: string, newData: Partial<Item>) => {
  const item = await itemModel.findByIdAndUpdate(itemId, newData, {
    new: true,
    runValidators: true
  });

  if (!item._id) {
    throw { message: 'Failed to update item', status: 500 };
  }

  return { data: { item } };
};

export const getAllItems = async () => {
  const items = await itemModel.find();

  if (!items) {
    throw { message: 'Failed to get items', status: 500 };
  }

  return { data: { items } };
};

export const getItem = async (itemId: string) => {
  const item = await itemModel.findByIt(itemId);

  if (!item._id) {
    throw { message: 'Failed to get item', status: 500 };
  }

  return { data: { item } };
};

export const deleteItem = async (itemId: string) => {
  const item = await itemModel.findByIdAndDelete(itemId);

  if (!item._id) {
    throw { message: 'Failed to delete item', status: 500 };
  }

  return { data: { item } };
};
