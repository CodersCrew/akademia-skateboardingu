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
      <ImageButton {...photosData} />
    </div>
  );
};

export default Sets;
