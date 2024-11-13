'use client';
import 'react-multi-carousel/lib/styles.css';

import Image from 'next/image';
import Carousel from 'react-multi-carousel';

import SectionContainer from '../SectionContainer';
import { Title } from '../Title';
import { TripleExclamationMark } from '../TripleExclamationMark';

const commentPairs = [
  ['/images/comment.png', '/images/comment.png'],
  ['/images/comment.png', '/images/comment.png'],
  ['/images/comment.png', '/images/comment.png'],
  ['/images/comment.png']
];

export function CommentsSection() {
  return (
    <SectionContainer className="flex flex-col">
      <div className="relative">
        <Title
          title="Poznaj nasze opinie"
          titleClassName="text-[#88DBB6] md:text-[3.8rem] lg:text-[4.5rem] xl:text-[5rem]"
        />
        <TripleExclamationMark className="-top-[12px] left-[calc(50%+110px)] min-[371px]:left-[calc(50%+170px)] md:-top-[30px] md:left-[calc(50%+280px)] lg:left-[calc(50%+340px)] xl:left-[calc(50%+380px)]" />
      </div>
      <div className="relative mt-9 pb-12">
        <Carousel
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
          }}
          arrows={false}
          swipeable
          draggable
          infinite
          className="m-auto"
          containerClass="container"
          renderDotsOutside
          showDots
        >
          {commentPairs.map(comments => (
            <div key={comments[0]} className="flex flex-col gap-4 p-2">
              {comments.map(src => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="h-auto w-full rounded-3xl"
                />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </SectionContainer>
  );
}
