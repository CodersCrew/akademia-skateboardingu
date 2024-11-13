import type { ReactNode } from 'react';

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

function SectionContainer({ children, className, id }: SectionContainerProps) {
  return (
    <div
      className={`mx-auto max-w-[2000px] overflow-hidden px-5 py-5 sm:px-10 sm:py-10 lg:px-16 lg:py-16 ${className}`}
      id={id}
    >
      {children}
    </div>
  );
}

export default SectionContainer;
