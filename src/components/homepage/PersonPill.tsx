import Image from 'next/image';

import { TripleExclamationMark } from './TripleExclamationMark';

type PersonPillProps = {
  personPillClassName?: string;
  withExclamationMarkLeftTop?: boolean;
  withExclamationMarkRightTop?: boolean;
};

export function PersonPill({
  personPillClassName = '',
  withExclamationMarkLeftTop,
  withExclamationMarkRightTop
}: PersonPillProps) {
  return (
    <div className={`relative ${personPillClassName}`}>
      {withExclamationMarkLeftTop && (
        <TripleExclamationMark className="-top-3 left-0 -rotate-45 md:-top-4" />
      )}
      {withExclamationMarkRightTop && (
        <TripleExclamationMark className="-top-6 right-8 md:-top-10 md:right-12" />
      )}
      <div className="flex min-h-64 min-w-24 flex-col justify-end gap-2.5 overflow-hidden rounded-full bg-[#FBD24D] md:aspect-pill md:max-w-[337px] md:gap-0">
        <p className="text-center font-poetsen-one text-2xl text-[#0C4A6E] md:text-4xl ">
          Adam
        </p>
        <div className="relative top-2 h-[200px] md:top-4 md:min-h-[77%]">
          <Image
            src="/images/adam.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
