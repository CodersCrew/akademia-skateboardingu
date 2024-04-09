import { StaticImageData } from 'next/image';
import Link from 'next/link';

import photoMain_1 from '/public/images/photo_Main_1.png';
import photoMain_2 from '/public/images/photo_Main_2.png';

import Title from '../Common/Title';
import ImageButton from './Button';

export type ButtonTypes = {
  image: StaticImageData;
  path: string;
  text: string;
};

const Sets = () => {
  const photosData: ButtonTypes[] = [
    { image: photoMain_1, path: '/sets/beginner', text: 'POCZĄTKUJĄCY' },
    { image: photoMain_2, path: '/sets/advanced', text: 'ZAAWANSOWANI' }
  ];

  return (
    <div className="h-567">
      <Title title="KOMPLETY:" />
      <div className="h-489 mt-20 flex items-center justify-center space-x-40">
        {photosData.map(element => (
          <Link key={element.image.blurDataURL} href={element.path}>
            <ImageButton {...element} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sets;
