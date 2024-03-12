import { Item, itemModel, PriceHistory } from '@/server/models/item';

export const addItem = async (data: Omit<Item, 'priceHistory'>) => {
  const newItemData: Item = {
    ...data,
    priceHistory: []
  };
  const newItem = new itemModel(newItemData);
  const item = await newItem.save();

  if (!item._id) {
    throw { message: 'Failed to add item', status: 500 };
  }
  return { data: { item }, options: { status: 201 } };
};

export const updateItem = async (itemId: string, newData: Partial<Item>) => {
  const currentItem = await itemModel.findByIdAndUpdate(itemId, newData, {
    new: true,
    runValidators: true
  });

  if (!currentItem) {
    throw { message: 'Item not found', status: 404 };
  }

  if (newData.price !== undefined && newData.price !== currentItem.price) {
    currentItem.priceHistory.push({
      price: newData.price as number,
      date: new Date()
    });

    await currentItem.save();
  }

  return { data: { updatedItem: currentItem } };
};

export const getAllItems = async () => {
  const items = await itemModel.find();

  if (!items) {
    throw { message: 'Failed to get items', status: 500 };
  }

  return { data: { items } };
};

export const getItem = async (itemId: string) => {
  const item = await itemModel.findById(itemId);

  if (!item) {
    throw { message: 'Failed to get item', status: 500 };
  }

  return { data: { item } };
};

export const deleteItem = async (itemId: string) => {
  const item = await itemModel.findByIdAndDelete(itemId);

  if (!item) {
    throw { message: 'Failed to delete item', status: 500 };
  }

  return { data: { item } };
};
