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
      <div className="relative h-[70px] w-[70px] overflow-hidden rounded-full md:h-[90px] md:w-[90px]">
        <Image
          src={img}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div>
        <p
          className="font-poetsen-one text-base md:text-lg"
          style={{ color: primaryColor }}
        >
          {title}
        </p>
        <p className="text-xs text-[#171717] md:text-base">{text}</p>
      </div>
      <div
        className="mr-3 font-poetsen-one text-[32px] text-transparent md:text-5xl"
        style={{ WebkitTextStroke: `2px ${primaryColor}` }}
      >
        &gt;&gt;
      </div>
    </button>
  );
}
