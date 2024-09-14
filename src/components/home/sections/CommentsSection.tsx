'use client';
import 'react-multi-carousel/lib/styles.css';

import Image from 'next/image';
import Carousel from 'react-multi-carousel';

import CustomCarouselDot from '../CustomCarouselDot';
import { Title } from '../Title';
import { TripleExclamationMark } from '../TripleExclamationMark';

const comments = [
  { id: 1, src: '/images/comment.png' },
  { id: 2, src: '/images/comment.png' },
  { id: 3, src: '/images/comment.png' },
  { id: 4, src: '/images/comment.png' },
  { id: 5, src: '/images/comment.png' },
  { id: 6, src: '/images/comment.png' },
  { id: 7, src: '/images/comment.png' }
];

// TODO subject to change according to design
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const splitArrayIntoChunks = (
  array: { id: number; src: string }[],
  size: number
) =>
  Array.from({ length: Math.ceil(array.length / size) }, (_element, index) =>
    array.slice(index * size, index * size + size)
  );

const COMMENTS_PER_PAGE = 6;

export function CommentsSection() {
  return (
    <div className="flex flex-col p-5">
      <div className="relative">
        <Title title="Poznaj nasze opinie" titleClassName="text-[#88DBB6]" />
        <TripleExclamationMark className="left-[calc(50%+200px)] top-1 md:left-[calc(50%+260px)]" />
      </div>
      {comments && comments.length > 0 ? (
        <div className="relative mt-9 pb-12">
          <Carousel
            responsive={responsive}
            arrows={false}
            swipeable
            draggable
            infinite
            containerClass="carousel-container"
            renderDotsOutside
            customDot={<CustomCarouselDot />}
            showDots={COMMENTS_PER_PAGE < comments.length}
          >
            {splitArrayIntoChunks(comments, COMMENTS_PER_PAGE).map(
              (subArray, index) => (
                <div key={index} className="grid grid-cols-3 gap-[1.375rem]">
                  {subArray.map(({ id, src }) => (
                    <div key={id} className="relative">
                      <Image
                        src={src}
                        alt=""
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-auto w-full rounded-[3.75rem]"
                      />
                    </div>
                  ))}
                </div>
              )
            )}
          </Carousel>
        </div>
      ) : null}
    </div>
  );
}
