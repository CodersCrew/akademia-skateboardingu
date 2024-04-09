import Image from 'next/image';

import Description from './Description';
import { ButtonTypes } from './Sets';

const ImageButton = (data: ButtonTypes, index: number) => {
  return (
    <>
      <Image src={data.image} alt={`photo-${index + 1}`} />
      <Description text={data.text} />
    </>
  );
};

export default ImageButton;
