'use client';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

type CustomIndicatorProps = {
  isSelected: boolean;
  onClick: () => void;
};

export function ImagesCarousel({ images }: { images: StaticImageData[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIndicatorClick = (index: number) => {
    setSelectedIndex(index);
  };

  const CustomIndicator = ({ isSelected, onClick }: CustomIndicatorProps) => (
    <div
      className={`indicator ${isSelected ? 'bg-purple-500' : 'bg-white'}
    ml-1.5 mr-1.5 h-4 w-4 cursor-pointer rounded-full `}
      onClick={onClick}
    />
  );

  return (
    <div className="relative mb-8 flex items-center justify-center">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        dynamicHeight={false}
        width={600}
        selectedItem={selectedIndex}
        onChange={setSelectedIndex}
        renderIndicator={(_, isSelected, index) => (
          <div className="inline-block justify-center">
            <CustomIndicator
              isSelected={isSelected}
              onClick={() => handleIndicatorClick(index)}
            />
          </div>
        )}
      >
        {images.map((image, index) => (
          <div
            key={image.blurDataURL}
            className="flex items-center justify-center"
          >
            <Image src={image} alt={`photo-${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
