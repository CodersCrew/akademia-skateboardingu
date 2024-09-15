import Image from 'next/image';
import Link from 'next/link';

type OfferProps = {
  containerClassName: string;
  img: string;
  primaryColor: string;
  text: string;
  title: string;
  href: string;
};

export function Offer({
  containerClassName,
  img,
  primaryColor,
  text,
  title,
  href
}: OfferProps) {
  return (
    <Link
      className={`grid grid-cols-[min-content_1fr_min-content] items-center gap-3 rounded-full p-[5px] text-left md:max-w-[368px] md:grid-flow-col md:grid-cols-1 md:grid-rows-[min-content_min-content_min-content] md:gap-6 md:p-[15px] md:text-center lg:max-w-[427px] ${containerClassName}`}
      href={href}
    >
      <div className="relative mx-auto h-[70px] w-[70px] overflow-hidden rounded-full md:h-[307px] md:w-[307px]">
        <Image
          src={img}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-full"
        />
      </div>
      <div className="gap-4 md:flex md:flex-col">
        <p
          className="font-poetsen-one text-base md:text-3xl"
          style={{ color: primaryColor }}
        >
          {title}
        </p>
        <p className="text-xs text-[#171717] md:mx-auto md:max-w-[224px] md:text-xl">
          {text}
        </p>
      </div>
      <div
        className="mr-3 font-poetsen-one text-[32px] text-transparent md:-translate-y-5 md:text-[96px] md:font-semibold"
        style={{ WebkitTextStroke: `2px ${primaryColor}` }}
      >
        &gt;&gt;
      </div>
    </Link>
  );
}
