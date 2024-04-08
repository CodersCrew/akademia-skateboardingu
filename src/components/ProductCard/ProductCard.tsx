import Image from 'next/image';
import ProductBadge, { colorVariants } from '../ProductBadge/ProductBadge';

export type ProductCardProps = {
  src: string;
  alt: string;
  name: string;
  description: string;
  price: number;
  lowestPrice: number;
  badgeText: string;
  badgeVariant: keyof typeof colorVariants;
};

const ProductCard = ({
  src,
  alt,
  name,
  description,
  price,
  lowestPrice,
  badgeText,
  badgeVariant
}: ProductCardProps) => (
  <div className="flex max-w-[359px] flex-col items-center rounded-[10px] border border-black bg-white px-[1.438rem] pb-[1.688rem] pt-7">
    <div className="relative">
      <Image width={313} height={325} alt={alt} src={src} />
      <div className="absolute right-0 top-0">
        <ProductBadge text={badgeText} variant={badgeVariant} />
      </div>
    </div>
    <div className="flex w-full flex-col gap-y-3.5 pb-[1.188rem] pt-[0.688rem]">
      <h3 className="text-xl">{name}</h3>
      <p>{description}</p>
      <p>{price} zł</p>
      <p className="text-[#CAC5C5]">
        najniższa cena z ostatnich 30 dni: {lowestPrice} zł
      </p>
    </div>
    <div className="w-full">
      <button className="rounded-[10px] bg-[#8E00FF] px-2.5 py-3.5 text-xl font-bold text-white">
        SPRAWDŹ
      </button>
    </div>
  </div>
);

export default ProductCard;
