'use client';

import { useState } from 'react';

type DropdownProps = {
  border: string;
  bg: string;
  primaryColor: string;
  text: string;
  title: string;
};

export function Dropdown({
  border,
  bg,
  primaryColor,
  text,
  title
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(open => !open);

  return (
    <div className="relative mx-auto md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] 2xl:max-w-[900px]">
      <button
        onClick={toggle}
        className={`flex w-full items-center justify-between border px-5 py-1 font-poetsen-one transition-all duration-100 lg:h-20 ${border} ${bg} ${open ? '' : 'delay-150'} ${open ? 'rounded-t-[20px] lg:rounded-t-[32px]' : 'rounded-[20px] lg:rounded-[32px]'}`}
        style={{ color: primaryColor }}
      >
        <p className="text-base lg:text-xl">{title}</p>
        <span
          className="relative bottom-px text-4xl text-transparent lg:text-5xl"
          style={{ WebkitTextStroke: `3px ${primaryColor}` }}
        >
          {open ? '-' : '+'}
        </span>
      </button>
      <div
        className={`overflow-hidden rounded-b-[20px] text-white transition-all lg:rounded-b-[32px] lg:text-xl ${border} ${open ? 'max-h-[200px] border px-4 py-3 delay-100' : 'max-h-0'}`}
      >
        {text}
      </div>
    </div>
  );
}
