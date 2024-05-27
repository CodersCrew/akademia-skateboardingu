import Image from 'next/image';
import Link from 'next/link';

import Description from './Description';
import { ImageButtonProps } from './Sets';

const ImageButton = ({ href, src, alt, text }: ImageButtonProps) => {
  return (
    <Link href={href}>
      <Image src={src} alt={alt} />
      <Description text={text} />
    </Link>
  );
};
export default ImageButton;
