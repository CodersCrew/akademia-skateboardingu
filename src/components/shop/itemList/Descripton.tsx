import { useEffect, useState } from 'react';

import { getAllItems } from '@/server/controllers/itemController';
import { Item } from '@/server/models/item';

export function Description() {
  const [items, setItems] = useState<Item[]>();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllItems();
      const itemsCollection = data.items as any as Item[];

      if (!items) {
        throw { message: 'Data fetch failed.', status: 500 };
      }
      setItems(itemsCollection);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {items?.map(element => (
        <>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>{element.price}</p>
        </>
      ))}
    </div>
  );
}
