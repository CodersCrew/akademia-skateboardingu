import {
  TableBody as TremorTableBody,
  TableCell,
  TableRow
} from '@tremor/react';
import { FaEdit, FaTrash } from 'react-icons/fa';

import { Item, PriceHistory } from '@/server/models/item';

export type ItemProps = {
  items: Item[];
}

export type Mapping = {
  item: string;
  entry: string;
  id: number;
}

const ActionIcons = () => (
  <div className="flex items-center">
    <FaEdit className="mr-3 cursor-pointer" title="Edytuj" />
    <FaTrash className="mr-3 cursor-pointer" title="Usuń" />
  </div>
);

export const renderPriceHistory = (priceHistory: PriceHistory[]) =>
  priceHistory.map((entry, id) => (
    <div key={id}>
      {' '}
      {entry.date.toLocaleDateString()}: {entry.price}
    </div>
  ));

const TableBody = ({ items }: ItemProps) => {
  const renderTableCells = (item: Item) =>
    Object.values(item).map((value, index) => (
      <TableCell key={index}>
        {value === 'priceHistory' ? renderPriceHistory(value) : value}
      </TableCell>
    ));

  return (
    <TremorTableBody className="border">
      {items ? (
        items.map((item: Item, id) => (
          <TableRow key={id}>
            {renderTableCells(item)}
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
