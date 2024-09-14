import {
  TableBody as TremorTableBody,
  TableCell,
  TableRow
} from '@tremor/react';
import { useRouter } from 'next/navigation';

import { deleteItem } from '@/server/controllers/itemController';
import { Item, PriceHistory } from '@/server/models/item';

import { ActionIcons } from './Icons';

export type TableBodyProps = {
  items: Item[];
};

const renderPriceHistory = (priceHistory: PriceHistory[]) =>
  priceHistory.map((entry, id) => (
    <div key={entry.date.toString()}>
      {' '}
      {entry.date.toLocaleDateString()}: {entry.price} zł
    </div>
  ));

export function TableBody({ items }: TableBodyProps) {
  const { push } = useRouter();

  const handleEdit = (_id: string) => {
    push(`admin/products/edit/${_id}`);
  };

  const handleDelete = async (_id: string) => {
    await deleteItem(_id);
  };

  return (
    <TremorTableBody>
      {items ? (
        items.map(item => (
          <TableRow key={item._id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.price} zł</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>
              <div
                className={`pb-0.75 pt-0.75 w-12 pl-3 ${item.visible ? 'bg-green-400' : 'bg-red-400'} rounded-tremor-small text-white`}
              >
                {item.visible}
              </div>
            </TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>
              {renderPriceHistory(item.priceHistory as PriceHistory[])}
            </TableCell>
            <TableCell>{item.photos}</TableCell>
            <TableCell>
              <ActionIcons
                handleEdit={() => handleEdit(item._id)}
                handleDelete={() => handleDelete(item._id)}
              />
            </TableCell>
          </TableRow>
        ))
      ) : (
        <div>Brak produktów do wyświetlenia.</div>
      )}
    </TremorTableBody>
  );
}
