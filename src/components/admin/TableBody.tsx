import {
  TableBody as TremorTableBody,
  TableCell,
  TableRow
} from '@tremor/react';
import { useRouter } from 'next/navigation';

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

const TableBody = ({ items }: TableBodyProps) => {
  const { push } = useRouter();

  const handleEdit = (_id: number) => {
    push(`admin/products/edit/${_id}`);
  };
  // const handleEdit = (id: number) => {
  //   // with database _id
  //   push(`admin/products/edit/${id}`);
  // };

  return (
    <TremorTableBody>
      {items ? (
        items.map((item: Item, _id) => (
          // items.map((item: Item, id) => (
          <TableRow key={item.product}>
            <TableCell>{item.product}</TableCell>
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
              <ActionIcons handleEdit={() => handleEdit(_id)} />
              {/* <ActionIcons handleEdit={() => handleEdit(id)} /> */}
            </TableCell>
          </TableRow>
        ))
      ) : (
        <div>Brak produktów do wyświetlenia.</div>
      )}
    </TremorTableBody>
  );
};

export default TableBody;
