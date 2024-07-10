import { Item } from '@/server/models/item';

const ProductContainer = ({
  data
}: {
  data: Omit<Item, 'visible' | 'priceHistory'>;
}) => {
  return <div className="border border-black p-2">{JSON.stringify(data)}</div>;
};

export default ProductContainer;
