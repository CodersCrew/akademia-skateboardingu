import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import Description from './Description';

type ButtontTypes = {
  images: StaticImageData[];
  paths: string[];
  text: string[];
};

const Buttons = ({ images, paths, text }: ButtontTypes) => {
  return (
    <div className="h-489 mt-20 flex items-center justify-center space-x-40">
      {images.map((image, index) => (
        <Link key={image.blurDataURL} href={paths[index]}>
          <Image src={image} alt={`photo-${index + 1}`} />
          <Description text={text[index]} />
        </Link>
      ))}
    </div>
  );
};

export default Buttons;
