import {
  TableHead as TremorTableHead,
  TableHeaderCell,
  TableRow
} from '@tremor/react';

enum Title {
  PRODUCT = 'PRODUKT',
  DESCRIPTION = 'OPIS',
  PRICE = 'CENA',
  QUANTITY = 'ILOŚĆ',
  VISIBLE = 'WIDOCZNY',
  CATEGORY = 'KATEGORIA',
  PRICE_HISTORY = 'HISTORIA CEN',
  PHOTOS = 'ZDJĘCIA',
  ACTION = 'AKCJE'
}

export function TableHead() {
  return (
    <TremorTableHead className="border bg-tremor-background-subtle">
      <TableRow>
        {Object.values(Title).map(item => (
          <TableHeaderCell key={item}>{item}</TableHeaderCell>
        ))}
      </TableRow>
    </TremorTableHead>
  );
}
