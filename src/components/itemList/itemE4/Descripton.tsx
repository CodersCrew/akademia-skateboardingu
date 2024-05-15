import { Types } from 'mongoose';
import { useEffect, useState } from 'react';

import { getAllItems } from '@/server/controllers/itemController';
import { Item } from '@/server/models/item';

export const Description = () => {
  const [items, setItems] = useState<Item[]>();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllItems();
      const itemsCollection = data.items;

      if (!items) {
        throw { message: 'Data fetch failed.', status: 500 };
      }
      setItems(itemsCollection);
    };

    fetchData();
  }, []);

  return (
  <div>{items?.map(element => {
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p>{element.price}</p>
  })}</div>);
};
