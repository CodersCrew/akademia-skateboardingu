import { TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import { Title } from '../utils/constants';

export const TableHeadComponent = () => {
  return (
    <TableHead className="border bg-tremor-background-subtle">
      <TableRow>
        {Object.values(Title).map(item => (
          <TableHeaderCell key={item}>{item}</TableHeaderCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
