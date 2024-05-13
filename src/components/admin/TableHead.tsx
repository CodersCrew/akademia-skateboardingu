import {
  TableHead as TremorTableHead,
  TableHeaderCell,
  TableRow
} from '@tremor/react';

import { Title } from '../../utils/constants';

const TableHead = () => (
  <TremorTableHead className="border bg-tremor-background-subtle">
    <TableRow>
      {Object.values(Title).map(item => (
        <TableHeaderCell key={item}>{item}</TableHeaderCell>
      ))}
    </TableRow>
  </TremorTableHead>
);

export default TableHead;
