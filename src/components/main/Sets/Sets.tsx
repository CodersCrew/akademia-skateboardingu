import { StaticImageData } from 'next/image';
import Link from 'next/link';

import photoMain_1 from '/public/images/photo_Main_1.png';
import photoMain_2 from '/public/images/photo_Main_2.png';

import Title from '../Common/Title';
import ImageButton from './Button';

export type ImageButtonProps = {
  href: string;
  src: StaticImageData;
  alt: string;
  text: string;
};
const Sets = () => {
  const photosData: ImageButtonProps[] = [
    {
      href: '/sets/beginner',
      src: photoMain_1,
      alt: 'photoMain_1',
      text: 'POCZĄTKUJĄCY'
    },
    {
      href: '/sets/advanced',
      src: photoMain_2,
      alt: 'photoMain_2',
      text: 'ZAAWANSOWANI'
    }
  ];

  return (
    <div className="h-567">
      <Title title="KOMPLETY:" />
      <div className="h-489 ml-20 mr-20 mt-20 flex items-center justify-center space-x-40">
        {photosData.map((element, index) => (
          <ImageButton
            key={element.alt}
            {...element}
            alt={`photo-${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Sets;
