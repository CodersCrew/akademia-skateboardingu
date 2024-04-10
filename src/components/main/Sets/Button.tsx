import Image from 'next/image';
import Link from 'next/link';

import Description from './Description';
import { ButtonTypes } from './Sets';

const ImageButton = (data: ButtonTypes[]) => {
  return (
    <div className="h-489 mt-20 flex items-center justify-center space-x-40">
      {data.map((element, index) => (
        <Link key={element.image.blurDataURL} href={element.path}>
          <Image src={element.image} alt={`photo-${index + 1}`} />
          <Description text={element.text} />
        </Link>
      ))}
    </div>
  );
};

export default ImageButton;
