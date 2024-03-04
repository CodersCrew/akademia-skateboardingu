import {
  TableBody as TremorTableBody,
  TableCell,
  TableRow
} from '@tremor/react';
import { FaEdit, FaTrash } from 'react-icons/fa';

import { Item, PriceHistory } from '@/server/models/item';

export type ItemProps = {
  items: Item[];
};

export type Mapping = {
  item: string;
  entry: string;
  id: number;
};

const ActionIcons = () => (
  <div className="flex items-center">
    <FaEdit
      className="mr-4 cursor-pointer text-lg text-blue-400"
      title="Edytuj"
    />
    <FaTrash className="cursor-pointer text-lg text-blue-400" title="Usuń" />
  </div>
);

const renderPriceHistory = (priceHistory: PriceHistory[]) =>
  priceHistory.map((entry, id) => (
    <div key={id}>
      {' '}
      {entry.date.toLocaleDateString()}: {entry.price} zł
    </div>
  ));

const TableBody = ({ items }: ItemProps) => {
  return (
    <TremorTableBody>
      {items ? (
        items.map((item: Item, id) => (
          <TableRow key={id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.price} zł</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>
              <div
                className={`pb-0.75 pt-0.75 w-12 pl-3 bg-${item.visible === 'Tak' ? 'green-400' : 'red-400'} rounded-tremor-small text-white`}
              >
                {item.visible}
              </div>
            </TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{renderPriceHistory(item.priceHistory)}</TableCell>
            <TableCell>{item.photos}</TableCell>
            <TableCell>
              <ActionIcons />
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
