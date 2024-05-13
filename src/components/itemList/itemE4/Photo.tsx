import Image, { StaticImageData } from 'next/image';

type PhotoTypes = {
  src: StaticImageData;
  alt: string;
};
export const Photo = ({ src, alt }: PhotoTypes) => {
  return <Image src={src} alt={alt} />;
};
