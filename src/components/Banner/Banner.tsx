'use client';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';

const items = [
  {
    src: 'images/skate_cut.png',
    key: 'baner1',
    message: 'odkryj nasze',
    subMessage: 'deski'
  },
  { src: 'images/skate_cut.png', key: 'baner2' },
  { src: 'images/skate_cut.png', key: 'baner3' }
];

const Banner = () => {
  return (
    <div>
      <Carousel
        showArrows={false}
        showIndicators
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        infiniteLoop
      >
        {items.map(item => (
          <div key={item.key}>
            <img src={item.src} />
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
    </div>
  );
};

export default Banner;