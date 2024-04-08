import { Item } from '@/server/models/item';

const ProductContainer = ({ data }: Omit<Item, 'visible' | 'priceHistory'>) => {
  return <div className="border border-black p-2">{data}</div>;
};

export default ProductContainer;
