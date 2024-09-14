import Image from 'next/image';

import { TripleExclamationMark } from './TripleExclamationMark';

type PersonPillProps = {
  className?: string;
  withExclamationMarkRightTop?: boolean;
};

export function PersonPill({
  className = '',
  withExclamationMarkRightTop
}: PersonPillProps) {
  return (
    <div className={`relative lg:mt-16 xl:mt-16 ${className}`}>
      {withExclamationMarkRightTop && (
        <TripleExclamationMark className="-top-6 right-8 md:-top-10 md:right-12" />
      )}
      <div className="flex aspect-pill min-h-64 min-w-24 flex-col justify-end gap-2.5 overflow-hidden rounded-full bg-[#FBD24D] md:w-full md:min-w-48 md:gap-0 lg:min-w-56  xl:min-w-64">
        <p className="text-center font-poetsen-one text-2xl text-[#0C4A6E] md:text-4xl ">
          Adam
        </p>
        <div className="relative top-3 h-[200px] md:top-4 md:min-h-[77%]">
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
