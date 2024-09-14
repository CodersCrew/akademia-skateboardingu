import { Item } from '@/server/models/item';

export function ProductContainer({
  data
}: {
  data: Omit<Item, 'visible' | 'priceHistory'>;
}) {
  return <div className="border border-black p-2">{JSON.stringify(data)}</div>;
}
