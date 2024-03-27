'use-client';

import Image, { StaticImageData } from 'next/image';

import usePagination from './Pagination';

const ImagesCarousel = ({ images }: { images: StaticImageData[] }) => {
  const { currentIndex, next, prev, goToIndex } = usePagination(images.length);

  return (
    <div className="relative mb-8 flex items-center justify-center">
      <Image
        src={images[currentIndex].src}
        alt={`photo_${currentIndex + 1}`}
        width={600}
        height={329}
      />
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => goToIndex(index)}
            className={`ml-1.5 mr-1.5 h-4 w-4 cursor-pointer rounded-full ${
              index === currentIndex ? 'bg-purple-500' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesCarousel;
