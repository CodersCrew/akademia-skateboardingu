import Link from 'next/link';

import { DoubleGreaterThanMark } from '../DoubleGreaterThanMark';
import { GalleryPill } from '../GalleryPill';
import { Title } from '../Title';

export function SeventhSection() {
  return (
    <div className="mx-auto flex flex-col gap-2.5 px-5 pt-5 text-white md:gap-10 md:pt-10">
      <div className="flex items-center gap-8 px-8 md:justify-center md:gap-12">
        <Title
          title="Zobacz"
          titleClassName="text-sky-300 "
          subtitle="galerię"
          subtitleClassName="left-8 "
        ></Title>
        <Link href={'#TODO'}>
          <DoubleGreaterThanMark className="text-[54px] md:text-[72px]" />
        </Link>
      </div>
      <div className="flex items-end justify-center gap-2.5 overflow-hidden pt-2.5 md:gap-6 ">
        <GalleryPill
          className="h-[150px] max-w-[337px] md:h-[250px] lg:h-[300px] xl:h-[500px]"
          src="/images/sample1.png"
        />
        <GalleryPill
          className="h-[120px] max-w-[337px] md:h-[150px] lg:h-[200px] xl:h-[400px]"
          src="/images/sample2.png"
        />
        <GalleryPill
          className=" h-[150px] max-w-[337px] md:h-[250px] lg:h-[300px] xl:h-[500px]"
          src="/images/sample1.png"
        />
        <GalleryPill
          className="h-[120px] max-w-[337px] md:h-[150px] lg:h-[200px] xl:h-[400px]"
          src="/images/sample2.png"
        />
      </div>
    </div>
  );
}
