import Image from 'next/image';

type GalleryPillProps = {
  className?: string;
  src: string;
};

export function GalleryPill({ className, src }: GalleryPillProps) {
  return (
    <div
      className={`relative h-[280px] w-full overflow-hidden rounded-t-full bg-[#6FADE2] ${className}`}
    >
      <Image layout="fill" objectFit="cover" src={src} alt="" />
    </div>
  );
}
