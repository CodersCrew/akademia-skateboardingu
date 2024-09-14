'use client';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';

type BannerProps = {
  items: {
    alt: string;
    key: string;
    message?: string;
    src: string;
    subMessage?: string;
  }[];
};

export function Banner({ items }: BannerProps) {
  return (
    <Carousel
      showArrows={false}
      showIndicators={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={false}
      infiniteLoop={true}
    >
      {items.map(item => (
        <div key={item.key}>
          <Image
            width={0}
            src={item.src}
            height={0}
            alt="sd"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
          {item.message && (
            <div className="absolute top-0 h-full w-full bg-black bg-opacity-30">
              <span className="absolute bottom-[4.653vw] left-1/2 flex -translate-x-1/2 flex-col text-[3.33vw] font-black uppercase tracking-[1.667vw] text-white">
                {item.message}
                {item.subMessage && (
                  <span className="text-[6.667vw]">{item.subMessage}</span>
                )}
              </span>
            </div>
          )}
        </div>
      ))}
    </Carousel>
  );
}
