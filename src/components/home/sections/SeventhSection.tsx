import Link from 'next/link';

import { Button } from '../Button';
import { DoubleGreaterThanMark } from '../DoubleGreaterThanMark';
import { GalleryPill } from '../GalleryPill';
import SectionContainer from '../SectionContainer';
import { Title } from '../Title';

export function SeventhSection() {
  return (
    <SectionContainer className="flex flex-col gap-8 pb-0 text-xs text-white sm:pb-0 sm:text-base lg:pb-0 xl:text-xl">
      <div className="flex items-center justify-center gap-8 md:gap-12">
        <Title
          title="Zobacz"
          titleClassName="text-sky-300"
          subtitle="galerię"
          subtitleClassName="left-8"
        />
        <Link href="#">
          <DoubleGreaterThanMark className="text-[54px] md:text-[72px]" />
        </Link>
      </div>
      <div className="flex h-[240px] justify-between gap-5 overflow-hidden sm:h-[310px] md:h-[360px]">
        <GalleryPill src="/images/sample1.png" />
        <GalleryPill className="top-10" src="/images/sample2.png" />
        <GalleryPill className="hidden lg:block" src="/images/sample1.png" />
        <GalleryPill
          className="top-10 hidden lg:block"
          src="/images/sample2.png"
        />
      </div>
    </SectionContainer>
  );
}
