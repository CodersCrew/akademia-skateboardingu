import Image from 'next/image';
import Link from 'next/link';

import { DoubleGreaterThanMark } from './DoubleGreaterThanMark';

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
      className={`grid grid-cols-[min-content_1fr_min-content] items-center gap-3 rounded-full p-[5px] text-left md:grid-flow-col md:grid-cols-1 md:grid-rows-[min-content_min-content_min-content] md:content-between md:gap-6 md:px-4 md:py-6 md:text-center lg:max-w-[427px] xl:gap-10 ${containerClassName}`}
      href={href}
    >
      <div className="relative mx-auto h-[70px] w-[70px] overflow-hidden rounded-full md:h-[170px] md:w-[170px]">
        <Image
          src={img}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-full"
        />
      </div>
      <div className="gap-3 md:flex md:max-w-[200px] md:flex-col">
        <p
          className="font-poetsen-one text-base md:text-xl lg:text-2xl xl:text-3xl"
          style={{ color: primaryColor }}
        >
          {title}
        </p>
        <p className="text-xs text-[#171717] md:mx-auto md:max-w-[224px] md:text-sm lg:text-lg xl:text-xl">
          {text}
        </p>
      </div>
      <DoubleGreaterThanMark
        markColor={primaryColor}
        className="mr-3 text-[32px] md:mr-0 md:h-10 md:-translate-y-5 md:justify-self-center md:text-[50px] md:font-semibold xl:h-16 xl:-translate-y-8 xl:text-[64px]"
      />
    </Link>
  );
}
