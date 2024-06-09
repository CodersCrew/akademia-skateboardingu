import Image from 'next/image';

type OfferProps = {
  containerClassName: string;
  img: string;
  primaryColor: string;
  text: string;
  title: string;
};

export function Offer({
  containerClassName,
  img,
  primaryColor,
  text,
  title
}: OfferProps) {
  return (
    <button
      className={`grid grid-cols-[min-content,1fr,min-content] items-center gap-3 rounded-[50px] px-[5px] py-1 text-left ${containerClassName}`}
    >
      <div className="h-[70px] w-[70px] overflow-hidden rounded-full">
        <Image
          src={img}
          alt=""
          width={70}
          height={70}
          layout="fixed"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div>
        <p
          className="font-poetsen-one text-base"
          style={{ color: primaryColor }}
        >
          {title}
        </p>
        <p className="text-xs text-[#171717]">{text}</p>
      </div>
      <div
        className="font-poetsen-one mr-3 text-[32px] text-transparent"
        style={{ WebkitTextStroke: `2px ${primaryColor}` }}
      >
        &gt;&gt;
      </div>
    </button>
  );
}
